import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: 10%;
        margin-right: auto;
        margin-right: calc(3.2rem / 2);
        padding-left: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})