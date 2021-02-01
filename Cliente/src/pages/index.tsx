import { gql, useQuery } from '@apollo/client';

import Home, { HomeTemplateProps } from 'templates/Home'

import bannerMocks from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
        name
      }
    }
  `)

  if(loading) return <p>Loading....</p>
  if(error) return <p>{error}</p>
  if(data) return <p>{JSON.stringify(data, null, 2)}</p>
  // client.query({
  //  query: gql`
  //    query getGames {
  //      games {
  //        name
  //      }
  //    }
  //  `
  //})

  return <Home {...props} />
}

//getStaticProps  => gerar um estático em build time { gatsby }
//getServerSideProps => gerar via ssr a cada request { Nunca vai para o bundle do client }
//getInitialProps => gerar via ssr a cada request { vai para o client, faz hydrate do lado do client depois do 1 req }
export function getServerSideProps() {
  //faz lógica
  //pode ser busca dados numa API
  //fazer calculo/leitura de context

  //retorno dos dados
  return {
    props: {
      banners: bannerMocks,
      newGames: gamesMock,
      mostPopularHighlight: hightlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: hightlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: hightlightMock
    }
  }
}

//ATENÇÃO:
//os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
