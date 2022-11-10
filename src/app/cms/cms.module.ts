import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { LanguagesComponent } from './languages/languages.component';


@NgModule({
  declarations: [
    CmsComponent,
    SidebarmenuComponent,
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
