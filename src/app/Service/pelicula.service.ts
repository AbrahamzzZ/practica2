import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPelicula } from '../Model/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private jsonUrl: string = "assets/json/datos.json";
  constructor(private http: HttpClient) {}

  getmovies(): Observable<IPelicula[]>{
    return this.http.get<IPelicula[]>(this.jsonUrl);
  }
}
