import movieData from "../fixtures/MoviesData"

describe('rancid tomatillos homepage', () => {

  beforeEach(() => {
    cy.intercept({method:'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, movieData)
    .visit('http://localhost:3000/')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should render correct elements', () => {
    cy.get('.poster').should('have.length', 40)
  })

  it('should display an error message if data is unavailable', () => {
    cy.intercept({method:'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'},{statusCode: 500}, movieData)
    .visit('http://localhost:3000/')
    .get('h1').contains('Refresh Page')
  });

  it('should view single movie component on a click', () => {
    cy.get('.poster').first().click().visit('http://localhost:3000/694919')
  })

  
})