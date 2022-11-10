import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  // component içerisini dolduracağımız bir input tanımladık
  @Input() dataSource:string[] = [];
  @Input() id!:string;
  @Input() list!:string;

  @Output() selected:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:any){
    console.log('event', event);
    this.selected.emit(event.target.value);
  }

}
