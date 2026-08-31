import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz que describe (de forma simple) la respuesta de la PokeAPI.
// Solo incluimos los campos que vamos a usar en la interfaz.
export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    other: {
      'official-artwork': {
        front_default: string | null;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  // URL base de la PokeAPI.
  private readonly url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  // Recibe el nombre o ID escrito por el usuario y hace la petición HTTP.
  // Devuelve un Observable con la información del Pokémon.
  buscarPokemon(nombreOId: string): Observable<Pokemon> {
    // Normalizamos: quitamos espacios y pasamos a minúsculas
    // (la PokeAPI requiere el nombre en minúsculas).
    const valor = nombreOId.trim().toLowerCase();
    return this.http.get<Pokemon>(this.url + valor);
  }
}
