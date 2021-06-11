import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  @Input() nombreCard = '';
  @Input() franq = 3;
  @Input() clase = '';


  constructor() { }

  ngOnInit(): void {
  }


}
