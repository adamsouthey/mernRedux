/**
 * Landing Page
 */
describe('Landing page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should load the landing page', () => {
        cy.visit('/')
    })
    it('should redirect to the home screen after clicking the home icon', () => {
        cy.get('a > .fa-home').click()
        cy.location('pathname').should('eq', '/')
    })
    it('should redirect to the list of developers screen after clicking the developers link in the navigation bar', () => {
        cy.contains('Developers').click()
        cy.location('pathname').should('eq', '/developers')
    })
    it('should redirect to the registration screen after clicking the register link in the navigation bar', () => {
        cy.contains('Register').click()
        cy.location('pathname').should('eq', '/register')
    })
    it('should redirect to the registration screen after clicking the register button', () => {
        cy.get('.buttons > [href="/register"]').click()
        cy.location('pathname').should('eq', '/register')
    })
    it('should redirect to the login screen after clicking the login link in the navigation bar', () => {
        cy.contains('Login').click()
        cy.location('pathname').should('eq', '/login')
    })
    it('should redirect to the login screen after clicking the login button', () => {
        cy.get('.buttons > [href="/login"]').click()
        cy.location('pathname').should('eq', '/login')
    })
})
