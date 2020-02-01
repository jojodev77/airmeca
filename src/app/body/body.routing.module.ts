import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** component */
import { ClientComponent } from './client/client.component';
import { QualiteComponent } from './qualite/qualite.component';


const routes: Routes = [
  { path: '', component: QualiteComponent },
  { path: 'client', component: ClientComponent },
  { path: 'qualite', component: QualiteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
