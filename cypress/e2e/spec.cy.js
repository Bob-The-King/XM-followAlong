import generateTestimonial from "../../util/generate-testimonial"

describe('testimonials', () => {
  it('lists testimonials', () => {
    cy.visit('localhost/XM-followAlong')

    cy.get("h1").should("have.text", "Testimonials")

    cy.get("ul[name=testimonials-list]").should("be.visible")
  })

  it("create a testimonial", () => {
    cy.visit('localhost/XM-followAlong')
    
    cy.get("form").should("be.visible");

    const fakeTestimonial = generateTestimonial();
    const {feedback: testFeedback, rating: testRating} = fakeTestimonial;
    // const testFeedback = "Example Feedback";
    // const testRating = 5;

    cy.get("form input[name=feedback]").type(testFeedback);
    cy.get("form input[name=rating]").type(testRating);

    cy.get("form input[type=submit]").click();

    cy.url().should("eq", "http://localhost/XM-followAlong/create.php") ; 

    cy.contains("Testimonial Created!");

    cy.get("a").should("have.text", "Return to Testimonials").click();

    cy.url().should("eq", "http://localhost/XM-followAlong/index.php");
    
    cy.get("ul[name=testimonials-list] li")
    .last()
    .should("have.text", `${testFeedback} ${testRating}/5`);
    })
  
})

