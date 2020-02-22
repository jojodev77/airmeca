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

/** pipe */
import { FilterPipe } from '../config/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BannerComponent, ClientComponent, QualiteComponent, BodyComponent,
     MatiereComponent, EquipementComponent, ContactComponent, MapComponent, FilterPipe],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BodyRoutingModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule
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
    FilterPipe,
    NgbModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class BodyModule { }
