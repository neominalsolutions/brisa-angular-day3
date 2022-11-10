import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day3';

  button1Click(){
    alert('button1 tıklandı')
  }

  onConfirm(){
    window.confirm('silmek istediğinize emin misiniz?')
  }
}
