/*
Author: Rene Bustamante J.
Date: 28-07-2022
Content:  Pagína principal o inicio de la aplicación, 
          generado como página estatica y renderización previa
*/
import { NextPage, GetStaticProps } from 'next';
import { Card, Grid, Row, Text, Link } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokémons'>
      <h2>Top Pokémon(120)</h2>
     
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( pokemon ) => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit='+ process.env.MODYO_POKEMON_LISTA_LIMITE);
  
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    // id: i + 1,
    // img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }
}


export default HomePage;
