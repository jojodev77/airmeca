import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** modules */
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class BodyModule { }
