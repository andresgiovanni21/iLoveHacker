import {Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  constructor() {
  }

  ocultar = false;
  ocultar2 = true;


  ngOnInit() {

    let passwords = ['perrito123', 'asdfasdf', 'admin2015', 'miclave21', 'letmein6969'];
    let index = Math.floor((Math.random() * passwords.length));
    let password = passwords[index];
    let letras = [];
    let counter = 0;
    let i;

    let interval = setInterval(function () {
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


  }
}
