import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Info} from "../core/models/info";

@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.component.html',
  styleUrls: ['./intro2.component.css']
})
export class Intro2Component implements OnInit {

  @Input() nombreUser = '';


  numero = 3;
  @Output() envInfo = new EventEmitter<number>();
  constructor() { }


  ngOnInit(): void {
  }

  clicBot(){
    this.envInfo.emit(this.numero)
  }
}
