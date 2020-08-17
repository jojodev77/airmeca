import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActiviteComponent } from './core/component/activite/activite.component';
import { QualiteComponent } from './core/component/qualite/qualite.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash: true
  }),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
