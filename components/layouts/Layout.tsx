import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children : React.ReactNode
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
      <>
        <Head>
            <title>{ title || 'Pokemon' }</title>
            <meta name="author" content="MODYO - René Bustamante J." />
            <meta name="description" content={`Información sobre el Pokémon ${ title }`} />
            <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />
        </Head>
      
        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
      
      </>
  )
};
