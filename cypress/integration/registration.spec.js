/**
 * Registration Page
 */
describe('Registration Page', () => {
  beforeEach(() => {
    cy.visit('register')
  })

  it('should autofocus the first input field on load', () => {
    cy.get('input')
      .first()
      .focus()
  })

  it('should accept input and display input', () => {
    const nameInput = 'Amazingnessofamazingness'
    const emailInput = 'amazing@gmail.com'
    const passwordInput = 'amazingPassword'

    cy.get('input[name="name"]')
      .type(nameInput)
      .should('have.value', nameInput)
    cy.get('input[name="email"]')
      .type(emailInput)
      .should('have.value', emailInput)
    cy.get('input[name="password"]')
      .type(passwordInput)
      .should('have.value', passwordInput)
    cy.get('input[name="password2"]')
      .type(passwordInput)
      .should('have.value', passwordInput)
  })

  context('Registration Error Handling', () => {
    it('should display a warning if name field is empty on form submission', () => {
      cy.get('[data-cy=submit]').click()
      cy.contains('Name is required')
    })
    it('should display a warning if email field is empty on form submission', () => {
      cy.get('[data-cy=submit]').click()
      cy.contains('Please include a valid email')
    })
    it('should display a warning if password field is empty on form submission', () => {
      cy.get('[data-cy=submit]').click()
      cy.contains('Please enter a password with 6 or more characters')
    })
    it('should display a warning if the passwords do not match on form submission', () => {
      cy.get('input[name="password"]').type('123')
      cy.get('input[name="password2"]').type('456')
      cy.get('[data-cy=submit]').click()
      cy.contains('Passwords do not match')
    })
  })

  context('Registration form submission', () => {
    it('should add a new user on submit', () => {
      cy.server()
      cy.route('POST', '/api/users', {
        name: 'Amazing Southey',
        email: 'amazingness@gmail.com',
        password: '123456'
      })
      cy.get('input[name="name"]').type('Adam Southey')
      cy.get('input[name="email"]').type('amazingness@gmail.com')
      cy.get('input[name="password"]').type('123456')
      cy.get('input[name="password2"]').type('123456')
      cy.get('[data-cy=submit]').click()
      cy.setLocalStoarge()
    })
  })
})
