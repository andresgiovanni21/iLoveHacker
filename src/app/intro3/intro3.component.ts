import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-intro3',
  templateUrl: './intro3.component.html',
  styleUrls: ['./intro3.component.css']
})
export class Intro3Component implements OnInit {
  @Input() nombreUser = '';
  @Output() envInfo = new EventEmitter<number>();
  numero1 = 4;
  numero2 = 5;
  numero3 = 6;

  constructor() { }

  ngOnInit(): void {
  }
clicBot1(){
  this.envInfo.emit(this.numero1)
}
  clicBot2(){
    this.envInfo.emit(this.numero2)
  }
  clicBot3(){
    this.envInfo.emit(this.numero3)
  }
}
