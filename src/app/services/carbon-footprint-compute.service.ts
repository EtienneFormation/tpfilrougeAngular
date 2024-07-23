import { Injectable } from '@angular/core';
import {Voyage} from "../entities/voyage";

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {
  private voyages : Voyage[] = [
    { distanceKm: 50, consommationPour100Km: 5, CO2: 50 * 5 / 100 * 2.3 },
    { distanceKm: 150, consommationPour100Km: 6, CO2: 150 * 6 / 100 * 2.3 },
    { distanceKm: 250, consommationPour100Km: 7, CO2: 250 * 7 / 100 * 2.3 },
    { distanceKm: 350, consommationPour100Km: 8, CO2: 350 * 8 / 100 * 2.3 },
    { distanceKm: 450, consommationPour100Km: 9, CO2: 450 * 9 / 100 * 2.3 }
  ];

  addVoyage(voyage : Voyage) {
    this.voyages.push(voyage);
  }

  getVoyages() {
    return this.voyages;
  }

  getResumeVoyage() : Voyage {
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
