import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit, OnChanges {
  searchText: string;
  matiereArray = [
    'ALLIAGE D’ALUMINIUM : 2024, 2017, 6061, 7075',
    'ALLIAGE D’INOX : 304L, 316L, Z10 ….',
    'ALLIAGE DE TITANE : TA6V',
    'ACIER DOUX AUX ACIERS TRAITES',
    'ALLIAGE DE CUIVRE, LAITON,',
    'ACIER A HAUTE DENSITE : INCONEL',
  ]


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.searchText = changes.searchText.currentValue;
  }

  setUppercaseName(searchText: string) {
    this.searchText = searchText;
  }

}
