import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CarbonFootprintComputeService} from "../services/carbon-footprint-compute.service";

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.css'
})
export class CarbonFootprintFormComponent {
  formulaireVoyage : FormGroup;

  constructor(private service : CarbonFootprintComputeService) {
    this.formulaireVoyage = new FormGroup({
      distance: new FormControl('', [Validators.required, Validators.min(0)]),
      conso: new FormControl('', []),
      date: new FormControl('', Validators.required),
      typeDeTransport: new FormControl('', [Validators.required])
    });
  }

  saveTrip() {
    if (!this.formulaireVoyage.valid) return;

    this.service.addVoyage({
      distanceKm : this.formulaireVoyage.value.distance,
      consommationPour100Km : this.formulaireVoyage.value.conso,
      typeDeTransport : this.formulaireVoyage.value.typeDeTransport
    });
  }
}
