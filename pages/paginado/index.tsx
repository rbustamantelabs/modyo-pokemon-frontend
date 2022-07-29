
// import { NextPage, GetStaticProps } from 'next';
import { useEffect, useState } from "react";

import { Layout } from '../../components/layouts';
import { Button, Grid, Pagination } from '@nextui-org/react';

import { pokeApi } from '../../api';
import { PokemonListResponse, SmallPokemon } from '../../interfaces';
import { PokemonCardSprites } from '../../components/pokemon';



interface Props {
  pokemons: SmallPokemon[];
}

const PaginadoPage = () => {

  const [currentUrl, setCurrentUrl] = useState("https://modyo-pokemon-backend-api.herokuapp.com/api/v1/pokemonfull?offset=0&limit=8");
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [nextUrl, setNextUrl] = useState("");
  const [previousUrl, setPreviousUrl] = useState("");
  
  const [pokemons, setPokemons] = useState<SmallPokemon[]>([]);

  const getData = async (urlCurrent: string) => {
    
    console.log(urlCurrent);
    const { data } = await pokeApi.get<PokemonListResponse>(urlCurrent);

    setCount(data.count);
    setNextUrl(data.next || "");
    setPreviousUrl(data.previous || "");

    const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
        ...poke,
      }) 
    );

    setPokemons(pokemons);
    setLoading(false);

    console.log(pokemons);
  }
  

  function goPageNext() {
    setLoading(true);
    console.log(nextUrl);
    setCurrentUrl(nextUrl);
    getData(nextUrl);
  }
  function goPagePrevious() {
    setLoading(true);

    setCurrentUrl(previousUrl);
    getData(previousUrl);
  }

  useEffect(() => {
    setLoading(true);

    getData(currentUrl);

    return () => {};

  }, []);
  
  if (loading) { return "Cargando..."}
  return (
      <Layout title='Pokémons - Paginado'>
        <Grid.Container gap={ 2 } justify='flex-start'>
        <Grid xs={12}>
          { previousUrl != "" && <Button onPress={goPagePrevious} color="gradient">Anterior</Button> }
          { nextUrl != "" && <Button onPress={goPageNext} color="gradient" ghost>Siguiente</Button> }
        </Grid>
        {

          pokemons.map( ( pokemon ) => (
            <PokemonCardSprites key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
      </Grid.Container>
      </Layout>
  )
};

export default PaginadoPage;
