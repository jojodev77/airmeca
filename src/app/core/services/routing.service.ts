import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/** rxjs */
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

/* Models */
import { ModuleParameters } from '../modules.parameters.models';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  moduleParametersSubject = new Subject<ModuleParameters>();
  data: ModuleParameters;

  constructor() {
  }
  addRoutingParametersService(data: ModuleParameters) {
    this.moduleParametersSubject.next(data);
  }

  getRoutingParametersService(): Observable<ModuleParameters> {
    return this.moduleParametersSubject.asObservable();
  }

}
