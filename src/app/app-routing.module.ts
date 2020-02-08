import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';


/** component */
import { ClientComponent } from './body/client/client.component';
import { QualiteComponent } from './body/qualite/qualite.component';
import { MatiereComponent } from './body/matiere/matiere.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  {
     path: '', component: BodyComponent },
     { path: 'client', component: ClientComponent },
     { path: 'qualite', component: QualiteComponent },
     { path: 'matiere', component: MatiereComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes,  {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  }),
  CommonModule


],
  exports: [RouterModule]
})
export class AppRoutingModule { }
