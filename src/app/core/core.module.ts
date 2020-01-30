import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/** component */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

/** module */
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class CoreModule { }
