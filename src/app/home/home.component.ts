import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem:string = '';

  button1Click(){
    alert('button1 tıklandı')
  }

  onConfirm(){
    window.confirm('silmek istediğinize emin misiniz?')
  }

}
