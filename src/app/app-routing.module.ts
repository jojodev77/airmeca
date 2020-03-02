import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';


/** component */
import { ClientComponent } from './body/client/client.component';
import { QualiteComponent } from './body/qualite/qualite.component';
import { MatiereComponent } from './body/matiere/matiere.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { EquipementComponent } from './body/equipement/equipement.component';
import { ContactComponent } from './body/contact/contact.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: '**', component: BodyComponent, pathMatch: 'full'},
  {
     path: 'body', component: BodyComponent, children: [
      {path: 'client', component: ClientComponent},
      {path: 'matiere', component: MatiereComponent},
      {path: 'qualite', component: QualiteComponent},
      {path: 'equipement', component: EquipementComponent},
      {path: 'contact', component: ContactComponent}
     ]
    },

];


@NgModule({
  imports: [ RouterModule.forRoot(routes,  {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    enableTracing: true,
    useHash: true
  }),
  CommonModule


],
  exports: [RouterModule]
})
export class AppRoutingModule { }
