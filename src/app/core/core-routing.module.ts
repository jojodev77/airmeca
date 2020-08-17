import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from '../core/body/body.component';
import { ActiviteComponent } from './component/activite/activite.component';
import { QualiteComponent } from './component/qualite/qualite.component';

const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: '**', redirectTo: '/body', pathMatch: 'full'},
  {  path: 'body', component: BodyComponent, children: [
    { path: 'activite', component: ActiviteComponent},
    { path: 'qualite', component: QualiteComponent},
  ] },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
