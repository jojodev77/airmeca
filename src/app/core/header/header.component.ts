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
          this.viewportScroller.scrollToPosition([0, 64]);
        }
      });
    });
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.router$ != null) {
      this.router$.unsubscribe();
    }
  }


routingToClient() {
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['body/client'], { fragment: 'client' }).finally(() => {
      this.router.onSameUrlNavigation = 'ignore'; // Restore config after navigation completes
  });
}

routingToMatiere() {
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['body/matiere'], { fragment: 'matiere' }).finally(() => {
      this.router.onSameUrlNavigation = 'ignore'; // Restore config after navigation completes
  });
}

routingToQualite() {
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['body/qualite'], { fragment: 'qualite' }).finally(() => {
      this.router.onSameUrlNavigation = 'ignore'; // Restore config after navigation completes
  });
}

locationBack() {
  window.history.back();
}

locationBackAngular() {
  this.loc.back();
}

}
