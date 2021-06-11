import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  @Input() nombreCard = '';
  @Input() franq = 2;
  @Input() clase = '';

  source = '';


  constructor() { }

  ngOnInit() {

  }

ngOnChanges(){

  if(this.franq == 1){
    this.source = '../../assets/img/hackerWeb-10.png';
  } else if(this.franq == 2){
    this.source = '../../assets/img/hackerWeb-11.png';
  }

}

}
