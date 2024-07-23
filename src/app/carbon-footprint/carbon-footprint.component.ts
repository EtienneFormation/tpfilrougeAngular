import { Component, OnInit } from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
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
    NgForOf
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent implements OnInit {
  voyage : Voyage;

  constructor(private carbonFootprintService : CarbonFootprintComputeService) {
    this.voyage = carbonFootprintService.getResumeVoyage();
  }

  ngOnInit() {
    this.calculerDistance();
    console.log("0. Création du composant carbon-footprint");
  }

  ajouterVoyage() {
    let distance = Math.round(10 + Math.random() * 500);
    let conso = Math.round( 2 + Math.random() * 9);

    this.carbonFootprintService.addVoyage({
      distanceKm: distance,
      consommationPour100Km: conso,
      CO2 : distance * conso / 100 * 2.3
    });
    this.calculerDistance()
  }

  calculerDistance() {
    this.voyage = this.carbonFootprintService.getResumeVoyage();
  }

  get voyages() {
    return this.carbonFootprintService.getVoyages();
  }

  calculateConsoColor() {
    if (this.voyage.consommationPour100Km > 7) return 'red';
    if (this.voyage.consommationPour100Km < 4) return 'green';
    return '';
  }

  add100() {
    this.voyage.distanceKm += 100;
  }
}
