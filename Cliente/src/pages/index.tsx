import Home, { HomeTemplateProps } from 'templates/Home'

import bannerMocks from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

//getStaticProps  => gerar um estático em build time { gatsby }
//getServerSideProps => gerar via ssr a cada request { Nunca vai para o bundle do client }
//getInitialProps => gerar via ssr a cada request { vai para o client, faz hydrate do lado do client depois do 1 req }
export async function getStaticProps() {
  //faz lógica
  //pode ser busca dados numa API
  //fazer calculo/leitura de context

  //retorno dos dados

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })
  return {
    props: {
      revalidate: 60,
      banners: data.banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label || null,
        buttonLink: banner.button?.link || null,
        ribbon: banner.ribbon?.text || null,
        ribbonColor: banner.ribbon?.color || null,
        ribbonSize: banner.ribbon?.size || null,
      })),
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
