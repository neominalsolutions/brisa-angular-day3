import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  // class için property tanımı
  @Input() text!:string;
  @Input() color!:string;
  @Input() fontSize:string = '24px';

  // event tanımlaması yaptık
  // event c#,java
  @Output() clicked:EventEmitter<void> = new EventEmitter<void>();

  // kullanıcının bir compıonent ile etkileşim yaptığını output sayesinde anlayabiliyoruz.


  constructor() { }

  ngOnInit(): void {
  }

  // butona tıklandığında onClick methodunu çağır.
  onClick(){
    // burada ise eventi emit ile fırlatıyoruz.
    // bu component içerisinde click yapıldığına dair bir event fırlatıyor.
    this.clicked.emit();
  }

}
