import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneradorQrComponent } from './generador-qr/generador-qr.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import {HttpClientModule} from "@angular/common/http";
import {QRCodeModule} from "angular2-qrcode";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GeneradorQrComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
