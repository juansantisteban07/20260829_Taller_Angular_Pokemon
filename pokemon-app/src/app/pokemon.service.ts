import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon, PokeApiResponse } from './pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  /** Busca un Pokémon por nombre o número. Devuelve un modelo normalizado. */
  search(query: string): Observable<Pokemon> {
    const term = query.trim().toLowerCase();
    return this.http
      .get<PokeApiResponse>(`${this.baseUrl}/${encodeURIComponent(term)}`)
      .pipe(map((res) => this.normalize(res)));
  }

  private normalize(res: PokeApiResponse): Pokemon {
    const artwork = res.sprites.other?.['official-artwork']?.front_default;
    const dream = res.sprites.other?.dream_world?.front_default;
    const image =
      artwork ||
      dream ||
      res.sprites.front_default ||
      '';

    return {
      id: res.id,
      name: res.name,
      image,
      types: res.types.map((t) => t.type.name),
      height: res.height,
      weight: res.weight,
    };
  }
}