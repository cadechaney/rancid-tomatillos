// import movieData from "../fixtures/MoviesData"
import movieData from '../fixtures/moviesData.json'

describe('template spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', movieData)
    .visit('http://localhost:3000')
    .get('.poster')
    .first()
    .click()
  })
 
  it('should contain the correct background image', () => {
    cy.get('img').invoke('attr', 'src').should('contain', "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg")
  })

  it('should contain correct title', () => {
    cy.get('.title').contains('Black Adam')
  })

  it('should contain correct rating', () => {
    cy.get('.rating').contains(4)
  })

  it('should contain correct runtime', () => {
    cy.get('.runtime').contains(125)
  })

  it('should contain correct release', () => {
    cy.get('.release').contains('2022-10-19')
  })

  it('should contain correct overview', () => {
    cy.get('.overview').contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  })

  it('should contain a button', () => {
    cy.get('button')
  })

  it('should view home page component on a click', () => {
    cy.get('button').click().visit('http://localhost:3000')
  })

})