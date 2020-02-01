import { Component, OnInit } from '@angular/core';

/** services */
import { RoutingService } from '../services/routing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routingToClient() {
    this.router.navigate(['/client']);
  }
}
