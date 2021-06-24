import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {InfoService} from "../info.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.component.html',
  styleUrls: ['./intro1.component.css']
})
export class Intro1Component implements OnInit {

  info= '';

  constructor(private router:Router, private nombreService: InfoService) { }

  ngOnInit(): void {
  }


  clicBot(){
    if (this.info == ''){
      alert("Debes escrbir tu nombre. No hagas trampa");
    }
    else {
      this.router.navigateByUrl('/intro2');
      this.nombreService.add(this.info);
    }
  }

}
