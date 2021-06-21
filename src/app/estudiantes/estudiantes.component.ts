import { Component, OnInit } from '@angular/core';
import {IestudianteInfo} from "../data/interfaces/iestudiante-info";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  public estudiante:IestudianteInfo;
  public cedula:string;

  constructor(public http: HttpClient,
              private route: ActivatedRoute,) {

    this.cedula = this.route.snapshot.params.cedula;
    this.estudiante= {} as IestudianteInfo;



    this.traerInfoEstudiante(this.cedula).subscribe(
      data=> {

        this.estudiante= data;

        console.log(this.estudiante);
      }
    );

  }

  ngOnInit(): void {
  }

  traerInfoEstudiante(cedula: string):Observable<IestudianteInfo>{

    // return this.http.get<IEstudianteInfo>('http://localhost:8000/guardias/?cedula='+`${cedula}`)
    //   .pipe(
    //     retry(1),
    //     catchError(this.processError)
    //   );
    return this.http.get<IestudianteInfo>('http://10.100.1.4:8000/guardias/?cedula='+`${cedula}`)
      .pipe(
        retry(1),
        catchError(this.processError)
      );

  }

  processError(err: { error: { message: string; }; status: any; message: any; }) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
