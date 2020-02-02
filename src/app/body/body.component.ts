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
export class BodyComponent implements OnInit, AfterViewChecked,  OnChanges {

moduleParametersSubscription: Subscription;
moduleParameters: any;
data: ModuleParameters;


  constructor(private routingService: RoutingService) { }

  ngOnInit() {
   this.data = {
     moduleName: '',
     routingVisibility: true
   } as ModuleParameters;
  }


ngAfterViewChecked() {
this.moduleParametersSubscription = this.routingService.moduleParametersSubject.asObservable().subscribe(
    data => this.data = data
  );

}

ngOnChanges(changes: SimpleChanges) {
}


}