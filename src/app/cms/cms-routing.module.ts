import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGuard } from 'src/shared/guards/page.guard';
import { CmsComponent } from './cms.component';
import { LanguagesComponent } from './languages/languages.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';

// CmsComponent module Layout => bu module girilince ilk karşımıza çıkan component. angular nested layout kavramını destekler.

const routes: Routes = [
  {path:'', component:CmsComponent}, // ana cms route
  { path: 'languages', component: LanguagesComponent },
  { 
    path: 'sidebar', 
    component: SidebarmenuComponent,
    data:{
      role:'cms-sidebar-admin', // bu componentin ekranda görünmesi için böyle bir rol yapısına ihtiyaç bazı kaynaklar buna claim ismini verir.
    },
    canActivate:[PageGuard]  // component yüklenemeden önce page guardan geçiyor mu
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
