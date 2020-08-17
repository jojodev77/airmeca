import { Component, OnInit, HostListener } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  scrollTo(className: string):void {
    const elementList = document.querySelectorAll( className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }


}
