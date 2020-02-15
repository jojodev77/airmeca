import { Injectable } from '@angular/core';

/** rxjs */
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PannelService {
  open$ = new Subject<string>();

  constructor() { }

  addMatAccordeon(value: string) {
    this.open$.next(value);
  }

  // tslint:disable-next-line:align
  openMatAccordeon(): Observable<string> {
    return this.open$.asObservable();
  }
}
