import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Bir module başka bir module ait componentlere o modul üzerinden ulaşacak ise bu durumda ilgili module e import edilir. Componentler module üzerinden gelir.

// Lazy Loaded Module ile uygulama birden fazla module ayrıabilir.
// avantajları => 1.geliştirici kendi module altında hem route hemde component tanımlaması yapar. App Module şişmez. Merge ihtimali düşer.
// 2. Module bazlı yetkilendime yapıları için uygun bir yöntemdir. Guard ile yapılmaktadır.
// 3. Module bazlı sayfalar browserda açıldığından dolayı js daha hızlı yüklenmesini sağlar tarayıcı cache şişirme en önemli özelliği


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
