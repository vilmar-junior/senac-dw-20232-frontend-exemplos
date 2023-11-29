import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //importar o módulo de requisições HTTP
    FormsModule,
    SweetAlert2Module.forRoot(), //https://github.com/sweetalert2/ngx-sweetalert2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
