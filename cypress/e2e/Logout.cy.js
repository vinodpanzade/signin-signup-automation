describe("Testing for Logout", () => {
  it("Test Suite", () => {
    cy.visit("https://automationexercise.com/");
    cy.log("Login Testing");
    cy.contains("a", "Signup / Login").click();
    cy.url().should("include", "/login");
    cy.get("div.login-form>h2").should("contain.text", "Login to your account");
    //valid cred
    cy.get('input[data-qa="login-email"]').type("priya.n05@gmail.com");
    cy.get('input[data-qa="login-password"]').type("Priya@505");
    cy.get('button[data-qa="login-button"]').click();
    cy.screenshot("Succuessful login ")
    cy.contains('a', 'Logout', { timeout: 10000 }).click()
    cy.screenshot("After Logout redirecting")



    //cy.getCookie('authToken').its('value').should('not.be.empty');
  });
});
