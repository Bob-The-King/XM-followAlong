describe('testimonials', () => {
  it('passes', () => {
    cy.visit('localhost/XM-followAlong')

    cy.get("h1").should("have.text", "Testimonials")

    cy.get("ul[name=testimonials-list]").should("be.visible")
  })
})