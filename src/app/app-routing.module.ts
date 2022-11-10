import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleGuard } from '../shared/guards/module.guard';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { PageGuard } from 'src/shared/guards/page.guard';

const routes: Routes = [
  {
    path:'component-demo',
    component:HomeComponent
  },
  { 
    path: 'cms', loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule),
    canLoad:[ModuleGuard] // cms routelarına giderken modul açılmadan önce moduleGuard module koruma altına al
  },
  {
    path:'unauthorize',
    component:UnauthorizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
