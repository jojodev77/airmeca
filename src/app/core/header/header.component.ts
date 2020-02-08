import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Scroll } from '@angular/router';

/** services */
import { RoutingService } from '../services/routing.service';

/** rxjs */
import { Location, ViewportScroller } from '@angular/common';
import { ModuleParameters } from '../modules.parameters.models';

/** rxjs */
import { filter } from 'rxjs/operators';
import { Subject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  moduleName: string;
  routingVisibility: boolean;
  router$: Subscription;

  constructor(private loc: Location, private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => {
      setTimeout(() => { // <-- FIX HERE, using timeout to get after content load!! <-- <-- <--
        if (e.position) {
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
    });
  }
  ngOnInit() {
    this.router$ = this.router.events.subscribe(next => this.onRouteUpdated(next));
  }

  ngOnDestroy() {
    if (this.router$ != null) {
      this.router$.unsubscribe();
    }
  }

  private onRouteUpdated(event: any): void {
    if (event instanceof NavigationEnd) {
      this.smoothScrollTop();
    }
  }

  private smoothScrollTop(): void {
    const scrollToTop = window.setInterval(() => {
      const pos: number = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 16);
  }

routingToClient(moduleName: string, routingVisibility: boolean) {
  const moduleParameters = {
    routingVisibility,
    moduleName
  } as ModuleParameters;
  // this.routingService.moduleParametersSubject.next(moduleParameters);
  // this.routingService.addRoutingParametersService(moduleParameters);
  this.router.navigate(['/client']);
}

routingToQualite() {
  this.router.navigate(['/qualite'], { fragment: 'qualite' });
}

locationBack() {
  window.history.back();
}

locationBackAngular() {
  this.loc.back();
}

}
