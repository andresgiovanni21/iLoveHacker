import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Intro1Component } from './intro1/intro1.component';
import { Intro2Component } from './intro2/intro2.component';
import { Intro3Component } from './intro3/intro3.component';
import { MalwareComponent } from './malware/malware.component';
import { PassComponent } from './pass/pass.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { CreditcardComponent } from './creditcard/creditcard.component';

@NgModule({
  declarations: [
    AppComponent,
    Intro1Component,
    Intro2Component,
    Intro3Component,
    MalwareComponent,
    PassComponent,
    TarjetaComponent,
    CreditcardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
