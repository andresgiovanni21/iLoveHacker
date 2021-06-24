import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {Intro1Component} from "./intro1/intro1.component";
import {Intro2Component} from "./intro2/intro2.component";
import {Intro3Component} from "./intro3/intro3.component";
import {MalwareComponent} from "./malware/malware.component";
import {PassComponent} from "./pass/pass.component";
import {TarjetaComponent} from "./tarjeta/tarjeta.component";

const routes: Routes=[
  {path: '', redirectTo: '/intro1', pathMatch: 'full'},
  {path: 'intro1', component:Intro1Component},
  {path: 'intro2', component:Intro2Component},
  {path: 'intro3', component:Intro3Component},
  {path: 'malware', component:MalwareComponent},
  {path: 'pass', component:PassComponent},
  {path: 'tarjeta', component:TarjetaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
