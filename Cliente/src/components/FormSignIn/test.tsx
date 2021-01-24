import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    //verifique email
    const { container } = renderWithTheme(<FormSignIn />)
    // Criei um container para pegar todo visual.

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    //verifique password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    //verifique button
    expect(
      screen.getByRole(`button`, { name: /sign in now/i })
    ).toBeInTheDocument()

    // executando o container para pegar todo o visual
    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Forget your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    //link
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()

    //text
    expect(screen.getByText(/Don’t have an account\?/i)).toBeInTheDocument()
  })
})
