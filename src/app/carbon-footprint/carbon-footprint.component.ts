import {Component, OnInit} from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {CarbonFootprintComputeService} from "../services/carbon-footprint-compute.service";
import {Voyage} from "../entities/voyage";

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    FormsModule,
    NgIf,
    NgStyle,
    NgClass,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent implements OnInit {
  voyage = {distanceKm: 0, consommationTotale: 0, CO2: 0};
  voyages : Voyage[] = [];

  constructor(private carbonFootprintService : CarbonFootprintComputeService) {
  }

  async ngOnInit() {
    this.voyage = await this.carbonFootprintService.getResumeVoyage();
    await this.calculerDistance();
    await this.getVoyages();
  }

  async ajouterVoyage() {
    let distance = Math.round(10 + Math.random() * 500);
    let conso = Math.round( 2 + Math.random() * 9);

    await this.carbonFootprintService.addVoyage({
      distanceKm: distance,
      consommationPour100Km: conso,
      typeDeTransport : 'voiture'
    });
    await this.calculerDistance()
  }

  async calculerDistance() {
    this.voyage = await this.carbonFootprintService.getResumeVoyage();
  }

  async getVoyages() {
    this.voyages = await this.carbonFootprintService.getVoyages();
  }

  calculateConsoColor() {
    if (this.voyage.consommationTotale > 7) return 'red';
    if (this.voyage.consommationTotale < 4) return 'green';
    return '';
  }

  add100() {
    this.voyage.distanceKm += 100;
  }
}
