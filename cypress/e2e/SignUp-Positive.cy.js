describe ('Testing for the SignUp positive ',()=>{

  it("Test Case for Signup", () => {
    cy.fixture("Signup").then((users) => {
      cy.wrap(users).each((user) => cy.Signup(user));

    });
  });

})









    //if there are the multiple li tag are present then how we can get actual one
    // cy.get('ul.nav.navbar-nav > li').each(($ele) => {
    //     const text= $ele.text();
    //     cy.log(text)

    // })

    //-------------------without using custom commands---------------///

    /*
     let datauser;
    
    before(  ()=>{
        cy.fixture("Orangehrm").then((data)=>{
            datauser=data;
        })
    })
    
    */
    // datauser.forEach((user) => {

    //   cy.visit("https://automationexercise.com/");
    //   cy.contains("a", "Signup / Login").click();
    //   cy.url().should("include", "/login");

    //   cy.get("div.signup-form>h2").should("contain.text", "New User Signup!");
    //   cy.get('input[data-qa="signup-name"]').type(user.name);
    //   cy.get('input[data-qa="signup-email"]').type(user.gmail);
    //   cy.get('button[data-qa="signup-button"]').click();

    //   //Check the Account information page
    //   cy.get("div.login-form>h2>b").should(
    //     "contain.text",
    //     "Enter Account Information"
    //   );
    //   cy.get('div.radio>span>input[type="radio"]').check().should("be.checked");
    //   cy.get("#password").type(user.password);
    //   cy.get("#days").select(user.dob.day);
    //   cy.get("#months").select(user.dob.month);
    //   cy.get("#years").select(user.dob.year);
    //   //click on two check box
    //   cy.get("#uniform-newsletter>span>input").check().should("be.checked");
    //   cy.get("#uniform-optin>span>input").check().should("be.checked");
    //   //cy.get('h2.tittle.text-center>b').should('contain.text','Address Information')
    //   cy.get("#first_name").type(user.firstName);
    //   cy.get("#last_name").type(user.lastName);
    //   cy.get("#company").type(user.company);
    //   cy.get("#address1").type(user.address1);
    //   cy.get("#address2").type(user.address2);
    //   cy.get("#country").select(user.country);
    //   cy.get("#state").type(user.state);
    //   cy.get("#city").type(user.city);
    //   cy.get("#zipcode").type(user.zipcode);
    //   cy.get("#mobile_number").type(user.mobile);
    //   cy.get('button[data-qa="create-account"]').click(); //create account button is clicking
    //   cy.contains("a", "Home").click(); //Home Button
    //   cy.contains("a", "Delete Account").click(); // delete acount button

    // });


    

