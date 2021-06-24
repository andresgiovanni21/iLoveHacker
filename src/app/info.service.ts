import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  nombres: string;

  add(nombre: string){
    this.nombres = nombre;
  }


}
