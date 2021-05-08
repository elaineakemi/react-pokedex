import { Link } from 'react-router-dom';

export const PokemonDetail = ({ pokemon }) => (
  <li>
    <Link to={`${pokemon.name}`}>{pokemon.name}</Link>
  </li>
);
