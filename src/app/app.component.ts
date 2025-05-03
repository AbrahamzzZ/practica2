import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPeliculaComponent } from "./Components/lista-pelicula/lista-pelicula.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPeliculaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica11';
  public contenido: string = 'Hola a todos =)ng';
}
