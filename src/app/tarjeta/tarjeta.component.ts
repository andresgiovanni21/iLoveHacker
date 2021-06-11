import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Card} from "../core/models/card";
import {Info} from "../core/models/info";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Output() envInfo = new EventEmitter<Card>();
  @Output() envInfo2 = new EventEmitter<Info>();

  info: Info = {nombre: '', numero: 1};
  card: Card = {nombre: '', franquicia: 3, clase: 'mover'};
  ocultar = false;

  franq(num) {
    this.card.franquicia = num;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  mostrar = () => this.ocultar = !this.ocultar;

  clicBot() {
    if (this.card.nombre == '') {
      alert("Debes escrbir un nombre. No eres muy buen hacker");
    } else if (this.card.franquicia == 3) {
      alert("Selecciona una franquicia. ¿Quieres que haga todo yo?");
    } else {
      this.envInfo.emit(this.card)
      this.mostrar();
    }
  }

  clicBot2() {
    this.envInfo2.emit(this.info);
  }
}
