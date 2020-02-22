import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit, OnChanges {
  searchText: string;
  matiereArray = [
    'INOX',
    'INOX AERONAUTIQUE',
    'ACIER',
    'ALUMINIUM',
    'LAITON',
    'CUIVRE',
    'COMPOSTE',
    'PLASTIQUE',
    'TITANE',
    'ALLOY',
    'INCONL'
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
