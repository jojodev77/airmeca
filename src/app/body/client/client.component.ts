import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

/** services */
import { PannelService } from 'src/app/config/pannel.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @ViewChild('myaccordeon')myPanels: MatAccordion;
  panelOpenState = false;
  open: string;

  constructor(private panelService: PannelService) { }

  ngOnInit() {
    this.open = this.panelService.open;
  }


  ngOnChanges(change: SimpleChanges) {
    this.panelService.open = change.open.currentValue;
    if (this.panelService.open === 'open') {
      this.openAll();
    }
  }

  openAll() {
    this.myPanels.openAll();
  }

}