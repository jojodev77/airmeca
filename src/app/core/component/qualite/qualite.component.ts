import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualite',
  templateUrl: './qualite.component.html',
  styleUrls: ['./qualite.component.scss']
})
export class QualiteComponent implements OnInit {

  panelOpenState = false;
  machine = true;
  certification = false;

  constructor() { }

  ngOnInit() {
  }

  elementViews(data: string) {
    console.log(data);
    if (data === 'machine') {
      this.machine = true;
      this.certification = false;
    }
    if (data === 'certification') {
      this.machine = false;
      this.certification = true;
    }
  }

}