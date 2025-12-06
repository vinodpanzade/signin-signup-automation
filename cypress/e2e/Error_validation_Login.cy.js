describe("Test Scenario for error validation in Login", () => {
  it("Test Suit", () => {
    cy.visit("https://automationexercise.com/");
    cy.log("Login Testing");
    cy.contains("a", "Signup / Login").click();
    cy.url().should("include", "/login");
    cy.get("div.login-form>h2").should("contain.text", "Login to your account");

    //with invalid email
    // cy.get('input[data-qa="login-email"]').type("priya.n05gmail.com");
    // cy.get('button[data-qa="login-button"]').click();
    // cy.screenshot('error for wrong email')

    //---------------
    //this is when we add wrong pass
    cy.get('input[data-qa="login-email"]').type("priya.n05@gmail.com");
    cy.get('input[data-qa="login-password"]').type("Priya505");
    cy.get('button[data-qa="login-button"]').click();
    cy.screenshot("error for wrong pass");
  });
});
