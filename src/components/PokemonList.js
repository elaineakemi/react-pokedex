import { PokemonDetail } from './PokemonDetail';
export const PokemonList = ({ pokemon }) => (
  <section>
    <ul>
      {pokemon.map((p) => (
        <PokemonDetail pokemon={p} />
      ))}
    </ul>
  </section>
);
