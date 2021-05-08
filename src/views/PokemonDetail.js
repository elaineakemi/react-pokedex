import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { PokemonService } from '../api/PokemonService';
import {
  PokemonDetailsContainer,
  TypesContainer,
  MovesContainer,
} from '../styles/PokemonContainer';
export const PokemonDetail = () => {
  const { name } = useParams();
  const [isBusy, setBusy] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = async () => {
    const { data } = await PokemonService.getPokemonByName(name);
    setPokemon(data);
    setBusy(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <PokemonDetailsContainer>
      <h1>
        #{pokemon.id} - {pokemon.name}
      </h1>
      {isBusy ? (
        <p>waiting...</p>
      ) : (
        <div>
          <img src={pokemon.sprites.front_default} alt="front" />
          <img src={pokemon.sprites.back_default} alt="back" />
          <TypesContainer>
            <h3>Types</h3>
            <ul>
              {pokemon.types.map((t) => (
                <li>{t.type.name}</li>
              ))}
            </ul>
          </TypesContainer>
          <MovesContainer>
            <h3>Moves</h3>
            <ul>
              {pokemon.moves.map((m) => (
                <li>{m.move.name}</li>
              ))}
            </ul>
          </MovesContainer>
        </div>
      )}
    </PokemonDetailsContainer>
  );
};
