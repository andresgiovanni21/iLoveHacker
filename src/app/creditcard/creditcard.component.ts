import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../card.service";


@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {





  constructor(public obtener:CardService) { }

  ngOnInit() {
  }

ngOnChanges(){


}

}
