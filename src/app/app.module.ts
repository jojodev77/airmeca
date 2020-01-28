import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/** Angularflex */
import { FlexLayoutModule } from '@angular/flex-layout';

/** Modules */
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CoreModule } from './core/core.module';
import { BodyModule } from './body/body.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CoreModule,
    BodyModule,
    FlexLayoutModule
  ],
  exports: [
CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
