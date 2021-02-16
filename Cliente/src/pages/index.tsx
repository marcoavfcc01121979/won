import Home, { HomeTemplateProps } from 'templates/Home'

import bannerMocks from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

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

  const { data: { banners, newGames, upcomingGames, freeGames, sections } } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })
  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcommingGames: gamesMapper(upcomingGames),
      upcommingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight),
    }
  }
}

//ATENÇÃO:
//os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
