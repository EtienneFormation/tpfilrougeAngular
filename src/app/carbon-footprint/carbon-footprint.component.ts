import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

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
export class CarbonFootprintComponent
  implements  OnInit,
              OnDestroy,
              OnChanges,
              DoCheck,
              AfterContentInit,
              AfterContentChecked,
              AfterViewInit,
              AfterViewChecked {
  distanceKm = 0;
  consommationPour100Km = 6;

  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ];

  calculateConsoColor() {
    if (this.consommationPour100Km > 7) return 'red';
    if (this.consommationPour100Km < 4) return 'green';
    return '';
  }

  add100() {
    this.distanceKm += 100;
  }

  ajouterVoyage() {
    this.voyages.push({
      distanceKm: Math.round(10 + Math.random() * 500),
      consommationPour100Km: Math.round( 2 + Math.random() * 9),
    });
    this.calculerDistance();
  }

  calculerDistance() {
    this.distanceKm = 0;
    this.consommationPour100Km = 0;
    if (this.voyages) {
      this.voyages.forEach(
        (voyage) => {
          this.distanceKm += voyage.distanceKm;
          this.consommationPour100Km += voyage.consommationPour100Km;
        });
    }
    this.consommationPour100Km =
      Math.round(100 * this.consommationPour100Km / this.voyages.length) / 100;

  }

  /*
   * Tests du cycle de vie d'un composant Angular
   */
  ngOnInit() {
    this.calculerDistance();
    console.log("0. Création du composant carbon-footprint");
  }

  ngDoCheck(): void {
    console.log("1. Vérification des données.");
  }

  ngAfterContentInit(): void {
    console.log("2. Contenu initialisé !");
  }

  ngAfterContentChecked(): void {
    console.log("3. Contenu checked !");
  }

  ngAfterViewInit(): void {
    console.log("4. Vue initalisée !");
  }

  ngAfterViewChecked(): void {
    console.log("5. Vue checked !");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("6. Modifications appliquées.");
    console.log(changes);
  }

  ngOnDestroy() {
    console.log("7. Destruction du composant carbon-footprint");
  }
}
