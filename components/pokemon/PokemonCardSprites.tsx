import { FC } from 'react';
import { useRouter } from 'next/router';

import { Tooltip, Grid, Card, Row, Text, Container, Image } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCardSprites: FC<Props> = ({ pokemon }) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${ pokemon.id }`);
    }

    return (
 
        <Grid xs={ 12 } sm={ 6 } md={ 3 } xl={ 2 } key={ pokemon.id }>
            <Card 
                isHoverable 
                isPressable
                onClick={ onClick }
            >
                <Card.Body css={{ p: 1 }}>
                <Tooltip content={"Pokémon: " + pokemon.name} rounded placement="rightStart" color="invert">

                    <Card.Image 
                        src={ pokemon.img }
                        width="100%"
                        height={ 140 }
                    />
                    </Tooltip>
                    <h6>Sprites:</h6>
                    <Container direction='row' display='flex' gap={ 0 }>
                        {   pokemon.pokemoninfo != null && 
                            <Image 
                                src={ pokemon.pokemoninfo.sprites.back_default }
                                alt={ pokemon.name }
                                width={ 32 }
                                height={ 32 }
                                title={ pokemon.name }
                            />
                        }
                        {   pokemon.pokemoninfo != null && 
                            <Image 
                            src={ pokemon.pokemoninfo.sprites.front_shiny }
                            alt={ pokemon.name }
                            width={ 32 }
                            height={ 32 }
                            title={ "Front Shiny" }

                        />
                    }
                    {   pokemon.pokemoninfo != null && 
                        <Image 
                            src={ pokemon.pokemoninfo.sprites.back_shiny }
                            alt={ pokemon.name }
                            width={ 32 }
                            height={ 32 }
                            title={ "Back Shiny" }

                        />
                    }
                    </Container>
                 
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{ pokemon.name }</Text>
                        <Text>#{ pokemon.id }</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )

};
