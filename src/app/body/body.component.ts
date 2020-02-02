import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges, AfterViewChecked } from '@angular/core';

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
export class BodyComponent implements OnInit, AfterViewInit, AfterViewChecked,  OnDestroy {

moduleParametersSubscription: Subscription;
moduleParameters: any;
data: ModuleParameters;
routingVisibility: boolean;
moduleName: string;

  constructor(private routingService: RoutingService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
this.routingService.moduleParametersSubject.subscribe(
  data => {
    this.data = data;
  }
);

  }

ngAfterViewChecked() {
this.moduleParametersSubscription = this.routingService.moduleParametersSubject.asObservable().subscribe(
    data => this.data = data
  );
this.routingVisibility = this.data.routingVisibility;
this.moduleName = this.data.moduleName;
}

ngOnDestroy() {

}

  visibilityModule() {
    this.routingService.getRoutingParametersService().subscribe(
      (data: ModuleParameters) => {
        this.moduleParameters = data;
      }
    );
    console.log(this.data);
    }

}
