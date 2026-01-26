describe ('Testing for the Login Positive Scenarios',()=>{

 it("Implement the login feature", () => {
    // cy.fixture("Login").then((creds)=>{
    //     cy.wrap(creds).each((cred)=>cy.Signin(cred));
    // })
    cy.fixture("Login").then((creds) => {
      cy.wrap(creds).each((cred) => cy.Login(cred));
    });

  });
}) 
 
 


/*
cy.fixture("Login").then((user)=>{
  

    
    })
*/
