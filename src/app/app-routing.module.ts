import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EstudiantesComponent} from "./estudiantes/estudiantes.component";
import {GeneradorQrComponent} from "./generador-qr/generador-qr.component";

const routes: Routes = [

  {path: '', redirectTo: 'codigo-qr', pathMatch: 'full'},
  {
    path: 'estudiante/:cedula',
    component: EstudiantesComponent
  },
  {
    path: 'codigo-qr',
    component: GeneradorQrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
