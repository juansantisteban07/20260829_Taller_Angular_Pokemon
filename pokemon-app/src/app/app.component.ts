import { Component } from '@angular/core';

import { FormularioComponent } from './formulario/formulario.component';
import { PokemonService, Pokemon } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Pokémon encontrado (o null si todavía no hay resultado).
  pokemon: Pokemon | null = null;

  // Indica si la petición está en curso (estado de carga).
  cargando = false;

  // Mensaje de error a mostrar (Pokémon no encontrado, etc.).
  error = '';

  // Inyectamos el servicio que hace las peticiones a la PokeAPI.
  constructor(private pokemonService: PokemonService) {}

  // Este método se ejecuta cuando el formulario emite el evento (buscar).
  onBuscar(valor: string): void {
    // Reiniciamos el estado antes de cada búsqueda.
    this.cargando = true;
    this.error = '';
    this.pokemon = null;

    // Pedimos el Pokémon al servicio y nos suscribimos a la respuesta.
    this.pokemonService.buscarPokemon(valor).subscribe({
      next: (respuesta) => {
        this.pokemon = respuesta;
        this.cargando = false;
      },
      error: () => {
        // Si la API responde con error (404), mostramos el mensaje.
        this.error = 'No se encontró ningún Pokémon con ese nombre o ID.';
        this.cargando = false;
      },
    });
  }

  // Devuelve la mejor imagen disponible del Pokémon.
  obtenerImagen(pokemon: Pokemon): string {
    return (
      pokemon.sprites.other['official-artwork'].front_default ||
      pokemon.sprites.front_default ||
      ''
    );
  }
}
