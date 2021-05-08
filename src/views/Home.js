import { PokemonContainer } from '../styles/PokemonContainer';
import { PokemonList } from '../components/PokemonList';
import { useEffect, useState } from 'react';
import { PokemonService } from '../api/PokemonService';

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const fetchPokemon = async () => {
    const { data } = await PokemonService.getPokemon();
    setPokemon(data.results);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <PokemonContainer>
      <PokemonList pokemon={pokemon} />
    </PokemonContainer>
  );
};
