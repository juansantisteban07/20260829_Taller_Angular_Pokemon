import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PokemonTarjeta {
  id: number;
  name: string;
  image: string;
  type: string;
  baseExperience: number;
  esFavorito?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {
  private http = inject(HttpClient);
  private readonly storageKey = 'equipo_pokemon_registrado';

  misPokemons = signal<PokemonTarjeta[]>([]);

  constructor() {
    this.cargarPokemonsDesdeStorage();
  }

  private cargarPokemonsDesdeStorage() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.misPokemons.set(JSON.parse(data));
    }
  }

  //1. OBTENER DATOS DE LA API
  buscarEnAPI(nombreOId: string){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nombreOId.toLowerCase()}`)
  }

  //2. guardar/crear nuevo pokemon dentro de el maleto.

  guardarPokemon(nuevo: PokemonTarjeta){
    const actualizados = [...this.misPokemons(), nuevo];
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.storageKey, JSON.stringify(actualizados));
  };


  //3. Actualizar pokemon favorito.
  actualizarFavorito(id : number){
    const actualizados = this.misPokemons().map(poke => {
      if(poke.id === id){
        return { ...poke, esFavorito: !poke.esFavorito };
      }
      return poke;
    });
  this.misPokemons.set(actualizados)
  localStorage.setItem(this.storageKey, JSON.stringify(actualizados));
}

  //4. Eliminar pokemon del maleto
  eliminarPokemon(id: number){
    const filtrados = this.misPokemons().filter(poke => poke.id !== id);
    this.misPokemons.set(filtrados);
     localStorage.setItem(this.storageKey, JSON.stringify(filtrados));
  }

}
