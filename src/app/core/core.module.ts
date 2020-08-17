import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DiapoComponent } from './component/diapo/diapo.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiviteComponent } from './component/activite/activite.component';
import { MatiereComponent } from './component/matiere/matiere.component';
import { ContactComponent } from './component/contact/contact.component';
import { EquipementComponent } from './component/equipement/equipement.component';
import { QualiteComponent } from './component/qualite/qualite.component';
import { FilterPipe} from '../core/component/matiere/filter.pipe';
@NgModule({
  declarations: [HeaderComponent, BodyComponent, DiapoComponent,
     ActiviteComponent,  MatiereComponent, ContactComponent, EquipementComponent, QualiteComponent,   FilterPipe],
  imports: [
    CommonModule,
     CoreRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports: [DiapoComponent,
     HeaderComponent,
      BodyComponent,
       ActiviteComponent,
       FilterPipe],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class CoreModule { }
