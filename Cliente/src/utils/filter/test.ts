import { ParseQueryStringToWhere, parseQueryStringToFilter } from '.'

const filterItems = [
  { name: 'price_lte', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price_lte: 100,
  platforms: ['windows', 'linux'],
  developers: 'Rockstart Games',
  sort: 'price:asc'
}

describe('ParseQueryStringToWhere()', () => {
  it('should parse queryString to where format', () => {
    const parsedQuey = ParseQueryStringToWhere({ queryString, filterItems })

    expect(parsedQuey).toStrictEqual({
      price_lte: 100,
      platforms: { name_contains: ['windows', 'linux'] },
      developers: { name_contains: 'Rockstart Games' }
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to filter values format', () => {
    const parsedQuey = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuey).toStrictEqual({
      price_lte: 100,
      platforms: ['windows', 'linux'],
      developers: ['Rockstart Games'],
      sort: 'price:asc'
    })
  })
})
