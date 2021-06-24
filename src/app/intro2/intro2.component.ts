import {Component, OnInit} from '@angular/core';
import {InfoService} from "../info.service";


@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.component.html',
  styleUrls: ['./intro2.component.css']
})
export class Intro2Component implements OnInit {




  constructor(public obtener: InfoService) { }


  ngOnInit(): void {
  }


}
