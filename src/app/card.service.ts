import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  nombres: string;
  franquicia= '../../assets/img/hackerWeb-10.png';
  clase: string;

  add(tarjeta: string, franco:string, clasi: string){
    this.nombres = tarjeta;
    this.franquicia = franco;
    this.clase = clasi;

  }

}
