import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import { GameCardProps } from 'components/GameCard'

import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: 'black' | 'white'
}

const Showcase = ({ title, highlight, games, color = 'white' }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading color="white" lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider color={color} items={games} />}
  </S.Wrapper>
)

export default Showcase
