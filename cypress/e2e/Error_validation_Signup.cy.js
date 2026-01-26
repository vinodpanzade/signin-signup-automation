describe ("Error validation in sign up",()=>{

    it('Test suit',()=>{
    //Just Visit on website and verifying th url    
    cy.visit("https://automationexercise.com/");
    cy.contains("a", "Signup / Login").click();
    cy.url().should("include", "/login");
    // navigating on sign up page 
    cy.get("div.signup-form>h2").should("contain.text", "New User Signup!");

    //when we take wrong email
    // cy.get('input[data-qa="signup-name"]').type("Vinod");
    // cy.get('input[data-qa="signup-email"]').type("vbisdnskd12@.com");
    // cy.get('button[data-qa="signup-button"]').click();
    // cy.screenshot('wrong email in signup')

    //when we add space instead of name  
    // cy.get('input[data-qa="signup-name"]').type(" ");
    // cy.get('input[data-qa="signup-email"]').type("vbisdnskd12@gmail.com");
    // cy.get('button[data-qa="signup-button"]').click();
    // cy.screenshot('Sign up with space in place of name')
    

    })
})