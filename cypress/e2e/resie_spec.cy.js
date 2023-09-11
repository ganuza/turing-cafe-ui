describe('reservation page', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "./resie"
      
    })
    .visit("http://localhost:3001/")
  })

  it('should have a title', () => {
    cy.get(".app-title").contains("h1", "Turing Cafe Reservations")
  })
})