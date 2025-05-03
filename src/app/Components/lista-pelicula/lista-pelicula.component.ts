import { Component } from '@angular/core';
import { IPelicula } from '../../Model/pelicula';
import { PeliculaService } from '../../Service/pelicula.service';
import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-lista-pelicula',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, DatePipe, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './lista-pelicula.component.html',
  styleUrl: './lista-pelicula.component.css'
})
export class ListaPeliculaComponent{
  title: string = "Lista de peliculas";
  movies: IPelicula[]=[];

  constructor(private miservicio: PeliculaService){}

  ngOnInit ():void{//Funcion propia de angular que se ejeucta automaticamente cuando se crea el componente
    this.gePeliculas();
    console.log(this.movies[0]);
  }

  gePeliculas():void{
    this.miservicio.getmovies().subscribe((data:IPelicula[]) =>{
        this.movies = data;
    });
  }

  comprar(pelicula: IPelicula){
    alert("Pelicula " + pelicula.title + " comprada");
  }

  activar(img: HTMLImageElement){
    img.classList.add("activa");
  }

  desactivar(img: HTMLImageElement){
    img.classList.add("desactiva");
  }
}
