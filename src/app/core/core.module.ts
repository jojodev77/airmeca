import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** component */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

/** module */
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
