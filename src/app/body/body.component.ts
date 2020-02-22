import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges, AfterViewChecked, SimpleChanges } from '@angular/core';

/** Services */
import { RoutingService } from '../core/services/routing.service';

/** rxjs */
import { Subscription } from 'rxjs';

/** Models */
import { ModuleParameters } from '../core/modules.parameters.models';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

moduleParametersSubscription: Subscription;
moduleParameters: any;
data: ModuleParameters;


  constructor(private routingService: RoutingService) { }

  ngOnInit() {
   this.data = {
     moduleName: '',
     routingVisibility: false
   } as ModuleParameters;
  }

  topSroll() {
    window.scrollTo(0,0);

  }

  bottomSroll() {
    window.scrollTo(0, 1200);

  }


}
