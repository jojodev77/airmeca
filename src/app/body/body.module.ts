import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/** modules */
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BodyRoutingModule } from './body.routing.module';

/** component */
import { BannerComponent } from './banner/banner.component';
import { ClientComponent } from './client/client.component';
import { QualiteComponent } from './qualite/qualite.component';
import { BodyComponent } from './body.component';




@NgModule({
  declarations: [BannerComponent, ClientComponent, QualiteComponent, BodyComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BodyRoutingModule
  ],
  exports: [
    ClientComponent,
    BannerComponent,
    QualiteComponent,
    BodyComponent,
    BodyRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class BodyModule { }
