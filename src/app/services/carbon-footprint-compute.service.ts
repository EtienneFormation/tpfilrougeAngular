import { Injectable } from '@angular/core';
import {Voyage} from "../entities/voyage";
import {Resume} from "../entities/resume";

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {
  private voyages : Voyage[] = [];

  async addVoyage(voyage : Voyage) {
    await this.lag(2000);
    return new Promise<void>((resolve) => {
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
      resolve();
    });
  }

  async getVoyages() {
    await this.lag(5000);
    return new Promise<Voyage[]>((resolve)=> {
      resolve(this.voyages);
    });
  }

  async getResumeVoyage() {
    return new Promise<Resume>((resolve)=> {
      let distanceKm = 0;
      let consommationPour100Km = 0;

      if (this.voyages) {
        this.voyages.forEach(
          (voyage) => {
            distanceKm += voyage.distanceKm;
            consommationPour100Km += voyage.consommationPour100Km;
          });
      }
      if (this.voyages.length > 0) {
        consommationPour100Km =
          Math.round(100 * consommationPour100Km / this.voyages.length) / 100;
      }

      resolve({distanceKm : distanceKm, consommationTotale : consommationPour100Km, CO2: 0 });
    });
  }

  async lag(delay: number) {
    return new Promise<void>((resolve)=> {
      setTimeout(resolve, delay);
    });
  }

  constructor() { }
}
