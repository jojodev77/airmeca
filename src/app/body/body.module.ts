import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/** modules */
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BodyRoutingModule } from './body.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

/** component */
import { BannerComponent } from './banner/banner.component';
import { ClientComponent } from './client/client.component';
import { QualiteComponent } from './qualite/qualite.component';
import { BodyComponent } from './body.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EquipementComponent } from './equipement/equipement.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [BannerComponent, ClientComponent, QualiteComponent, BodyComponent,
     MatiereComponent, EquipementComponent, ContactComponent, MapComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BodyRoutingModule,
    FlexLayoutModule,
    NgbModule
  ],
  exports: [
    ClientComponent,
    BannerComponent,
    QualiteComponent,
    BodyComponent,
    EquipementComponent,
    ContactComponent,
    MatiereComponent,
    MapComponent,
    FlexLayoutModule,
    NgbModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class BodyModule { }
