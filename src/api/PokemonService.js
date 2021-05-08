import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const withBaseUrl = (path) => `${BASE_URL}${path}`;

export class PokemonService {
  static getPokemon() {
    return axios(withBaseUrl('?limit=151'));
  }

  static getPokemonById(id) {
    return axios(withBaseUrl(`${id}`));
  }

  static getPokemonByName(name) {
    return axios(withBaseUrl(`${name}`));
  }
}
