import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CardService} from "../card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit {


  card= {nombre: '', franquicia: '', clase: 'mover'};
  card2= {nombre: '', franquicia: '../../assets/img/hackerWeb-10.png', clase: ''};
  ocultar = false;
  ocultar2 = true;
  franq(num) {
    this.card.franquicia = num;
  }

  constructor(private router:Router, private cardita: CardService) {
  }

  ngOnInit(): void {
  }

  mostrar = () => this.ocultar = !this.ocultar;
  mostrar2 = () => this.ocultar2 = !this.ocultar2;

  clicBot() {
    if (this.card.nombre == '') {
      alert("Debes escrbir un nombre. No eres muy buen hacker");
    } else if (this.card.franquicia == '') {
      alert("Selecciona una franquicia. ¿Quieres que haga todo yo?");
    } else {
      this.mostrar();
    this.mostrar2();
    this.cardita.add(this.card.nombre,this.card.franquicia,this.card.clase);
    }
  }

  clicBot2() {
    this.cardita.add(this.card2.nombre,this.card2.franquicia,this.card2.clase);
    this.router.navigateByUrl('/intro1');
  }
}
