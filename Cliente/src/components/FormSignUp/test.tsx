import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)
    // Criei um container para pegar todo visual.

    //verifique name
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()

    //verifique email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    //verifique password
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

    //Verifique a confirm password
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    //verifique button
    expect(
      screen.getByRole(`button`, { name: /Sign up now/i })
    ).toBeInTheDocument()

    // executando o container para pegar todo o visual
    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    //link
    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument()

    //text
    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument()
  })
})
