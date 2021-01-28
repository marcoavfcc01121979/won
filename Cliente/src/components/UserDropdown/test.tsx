import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="marco ferreira" />)

    expect(screen.getByText(/marco ferreira/i)).toBeInTheDocument()
  })
  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="marco ferreira" />)

    //open menu
    userEvent.click(screen.getByText(/marco ferreira/i))

    expect(screen.getByRole('link', { name: /My profile/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign out/i })).toBeInTheDocument()
  })
})
