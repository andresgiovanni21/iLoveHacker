import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  constructor() {
  }
  correo = '';
  numero = 1;
  ocultar = false;
  ocultar2 = true;
  @Output() envInfo = new EventEmitter<number>();

  ngOnInit() {

    var passwords = ['perrito123', 'asdfasdf', 'admin2015', 'miclave21', 'letmein6969'];
    var indexOld;
    var index = Math.floor((Math.random() * passwords.length));
    var password = passwords[index];
    var letras = [];
    var counter = 0;
    var i;

    var interval = setInterval(function () {
      for (i = 0; i < counter; i++) {
        letras[i] = password.charAt(i);
      }
      for (i = counter; i < password.length; i++) {
        letras[i] = Math.random().toString(36).charAt(2);
      }
      $('.password').text(letras.join(''));
    }, 25);

    function hack() {
      counter++;
      if (counter == password.length) {
        $('.acceso').removeClass('hidden');
      }
    }

    $(window).on('keydown', hack);

    $('.volver').on('click', function (){

      clearInterval(interval);
      this.indexOld = this.index;
      do {
        this.index = Math.floor((Math.random() * this.passwords.length));
      } while(this.index == this.indexOld);

      this.password = this.passwords[this.index];
      this.letras = [];
      this.counter = 0;

    });
  }

  mostrar = () => this.ocultar = !this.ocultar;
  mostrar2 = () => this.ocultar2 = !this.ocultar2;

  empezar() {

      this.mostrar();
      this.mostrar2();


  }

  clicBot(){
    this.mostrar();
    this.mostrar2();
      this.envInfo.emit(this.numero)

  }
}
