import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** component */



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/body/body.module').then(mod => mod.BodyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
