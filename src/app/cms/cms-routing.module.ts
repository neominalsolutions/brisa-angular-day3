import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.component';
import { LanguagesComponent } from './languages/languages.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';

// CmsComponent module Layout => bu module girilince ilk karşımıza çıkan component. angular nested layout kavramını destekler.

const routes: Routes = [
  {path:'', component:CmsComponent}, // ana cms route
  { path: 'languages', component: LanguagesComponent },
  { path: 'sidebar', component: SidebarmenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
