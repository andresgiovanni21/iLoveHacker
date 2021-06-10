import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Info} from "../core/models/info";

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.component.html',
  styleUrls: ['./intro1.component.css']
})
export class Intro1Component implements OnInit {

  @Output() envInfo = new EventEmitter<Info>();
  info: Info = {nombre: '', numero: 2};

  constructor() { }

  ngOnInit(): void {
  }

  clicBot(){
    if (this.info.nombre == ''){
      alert("Debes escrbir tu nombre. No hagas trampa");
    }
    else {
      this.envInfo.emit(this.info)
    }
  }

}
