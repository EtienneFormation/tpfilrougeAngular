import { Injectable } from '@angular/core';
import {Voyage} from "../entities/voyage";

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {
  private voyages : Voyage[] = [];

  addVoyage(voyage : Voyage) {
    switch (voyage.typeDeTransport) {
      case 'voiture':
        voyage.CO2 = voyage.distanceKm * voyage.consommationPour100Km / 100 * 2.3;
        break;
      case 'train':
        voyage.CO2 = voyage.distanceKm * 0.03;
        break;
      case 'avion':
        voyage.CO2 = voyage.distanceKm * 0.2;
        break;
    }
    this.voyages.push(voyage);
  }

  getVoyages() {
    return this.voyages;
  }

  getResumeVoyage() {
    let distanceKm = 0;
    let consommationPour100Km = 0;

    if (this.voyages) {
      this.voyages.forEach(
        (voyage) => {
          distanceKm += voyage.distanceKm;
          consommationPour100Km += voyage.consommationPour100Km;
        });
    }
    consommationPour100Km =
      Math.round(100 * consommationPour100Km / this.voyages.length) / 100;

    return {distanceKm : distanceKm, consommationPour100Km : consommationPour100Km, CO2: 0 };
  }

  constructor() { }
}
