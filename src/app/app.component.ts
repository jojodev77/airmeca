import { Component} from '@angular/core';
import { filter } from 'rxjs/operators';
import { Scroll, Router } from '@angular/router';
import { Location, ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  constructor(private loc: Location, private router: Router, private viewportScroller: ViewportScroller) {
    this.router.navigate(['/body']);
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
  locationBack() {
    window.history.back();
  }




}
