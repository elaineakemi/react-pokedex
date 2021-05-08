import styled from 'styled-components';

export const PokemonContainer = styled.section`
  padding: 15px;
  background: #cecece;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
`;

export const PokemonDetailsContainer = styled.section`
  padding: 15px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px;
`;

export const TypesContainer = styled.section`
  ul {
    list-style: none;
    li {
      display: inline-block;
      padding: 5px 15px;
      border: 1px solid black;
      border-radius: 10px;   
      background: #cecece;
      }
    }
  }
`;

export const MovesContainer = styled.section`
  ul {
    list-style: none;
    li {
      display: inline-block;
      padding: 0px 5px;
      border: 1px solid black;
      }
    }
  }
`;
