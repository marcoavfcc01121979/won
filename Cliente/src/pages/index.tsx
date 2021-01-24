import Home, { HomeTemplateProps } from 'templates/Home'

import bannerMocks from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

//getStaticProps  => gerar um estático em build time
//getServerSideProps => gerar via ssr a cada request
//getInitialProps => gerar via ssr a cada request
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
