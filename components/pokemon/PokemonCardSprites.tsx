import { FC } from 'react';
import { useRouter } from 'next/router';

import { Grid, Card, Row, Text, Container, Image } from '@nextui-org/react';

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
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ pokemon.id }>
            <Card 
                isHoverable 
                isPressable
                onClick={ onClick }
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image 
                        src={ pokemon.img }
                        width="100%"
                        height={ 140 }
                    />
                    <h6>Sprites:</h6>
                    <Container direction='row' display='flex' gap={ 0 }>
                        {   pokemon.pokemoninfo != null && 
                            <Image 
                                src={ pokemon.pokemoninfo.sprites.back_default }
                                alt={ pokemon.name }
                                width={ 32 }
                                height={ 32 }
                            />
                        }
                        {   pokemon.pokemoninfo != null && 
                            <Image 
                            src={ pokemon.pokemoninfo.sprites.front_shiny }
                            alt={ pokemon.name }
                            width={ 32 }
                            height={ 32 }
                        />
                    }
                    {   pokemon.pokemoninfo != null && 
                        <Image 
                            src={ pokemon.pokemoninfo.sprites.back_shiny }
                            alt={ pokemon.name }
                            width={ 32 }
                            height={ 32 }
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
