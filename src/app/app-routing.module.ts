import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/** component */
import { ClientComponent } from './body/client/client.component';
import { QualiteComponent } from './body/qualite/qualite.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/body/body.module').then(mod => mod.BodyModule)
  },
  { path: 'client', component: ClientComponent },
  { path: 'qualite', component: QualiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
