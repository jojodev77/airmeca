import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** component */
import { ClientComponent } from './body/client/client.component';


const routes: Routes = [
  { path: '', component: ClientComponent, },
  {
    path: 'client',
    loadChildren: () => import('../app/body/client/client.component').then(mod => mod.ClientComponent)
  },
  {
    path: 'qualite',
    loadChildren: () => import('../app/body/qualite/qualite.component').then(mod => mod.QualiteComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
