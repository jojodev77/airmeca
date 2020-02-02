import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** services */
import { RoutingService } from '../services/routing.service';

/** rxjs */
import { Subject, Observable } from 'rxjs';
import { ModuleParameters } from '../modules.parameters.models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  moduleName: string;
  routingVisibility: boolean;

  constructor(private router: Router, private routingService: RoutingService) { }

  ngOnInit() {
  }

  routingToClient(moduleName: string, routingVisibility: boolean) {
    const moduleParameters = {
      routingVisibility,
      moduleName
    } as ModuleParameters ;
    this.routingService.moduleParametersSubject.next(moduleParameters);
    this.routingService.addRoutingParametersService(moduleParameters);
    this.router.navigate(['/client']);
  }

  routingToQualite(moduleName: string, routingVisibility: boolean) {
    const moduleParameters = {
      routingVisibility,
      moduleName
    } as ModuleParameters ;
    this.routingService.moduleParametersSubject.next(moduleParameters);
    this.routingService.addRoutingParametersService(moduleParameters);
    this.router.navigate(['/qualite']);
  }
}
