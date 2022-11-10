import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyLabelComponent } from './components/my-label/my-label.component';


// Not Bİr modul başka bir module ait componentlere directivelere, pipelara erişmek için module üzerinden export edilmelidir.
// artık myLabel ve myButton componentleri bu module üzerinden çalışacak. Shared Module içerisinde kaldı.
@NgModule({
  declarations: [
    MyButtonComponent,
    MyLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyButtonComponent,
    MyLabelComponent
  ]
})
export class SharedModule { }
