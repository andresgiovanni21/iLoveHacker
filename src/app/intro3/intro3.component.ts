import {Component, OnInit} from '@angular/core';
import {InfoService} from "../info.service";

@Component({
  selector: 'app-intro3',
  templateUrl: './intro3.component.html',
  styleUrls: ['./intro3.component.css']
})
export class Intro3Component implements OnInit {

  constructor(public obtener:InfoService) { }

  ngOnInit(): void {
  }

}
