import { Component, Input } from '@angular/core';
import {Info} from "./core/models/info";
import {Card} from "./core/models/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  s_exp = 1;
  nombre = '';
  nombreCard = '';
  franq = 3;
  clase = '';

  recInfo(info: Info) {
    this.s_exp = info.numero;
    this.nombre = info.nombre;
  }
  recInfo2($event) {
    this.s_exp = $event;

  }
  recInfo3(card: Card){
    this.nombreCard = card.nombre;
    this.franq = card.franquicia;
    this.clase = card.clase;
  }
  recInfo4(info: Info){
    this.s_exp = info.numero;
    this.clase = info.nombre;
  }
}
