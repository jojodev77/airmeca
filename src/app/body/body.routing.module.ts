import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** component */
import { ClientComponent } from './client/client.component';
import { QualiteComponent } from './qualite/qualite.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body.component';
import { MatiereComponent } from './matiere/matiere.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
