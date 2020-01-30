import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/** modules */
import { AngularMaterialModule } from '../angular-material/angular-material.module';

/** component */
import { BannerComponent } from './banner/banner.component';
import { ClientComponent } from './client/client.component';
import { QualiteComponent } from './qualite/qualite.component';



@NgModule({
  declarations: [BannerComponent, ClientComponent, QualiteComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ClientComponent,
    BannerComponent,
    QualiteComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class BodyModule { }
