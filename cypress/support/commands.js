 
 //Custom Commands for the sign up
 Cypress.Commands.add("Signup", (user) => {
    
    cy.visit("https://automationexercise.com/");
    cy.contains("a", "Signup / Login").click();
    cy.url().should("include", "/login");

    cy.get("div.signup-form>h2").should("contain.text", "New User Signup!");
    cy.get('input[data-qa="signup-name"]').type(user.name);
    cy.get('input[data-qa="signup-email"]').type(user.gmail);
    cy.get('button[data-qa="signup-button"]').click();

    //Check the Account information page
    cy.get("div.login-form>h2>b").should(
      "contain.text",
      "Enter Account Information"
    );
    cy.get('div.radio>span>input[type="radio"]').check().should("be.checked");
    cy.get("#password").type(user.password);
    cy.get("#days").select(user.dob.day);
    cy.get("#months").select(user.dob.month);
    cy.get("#years").select(user.dob.year);
    //click on two check box
    cy.get("#uniform-newsletter>span>input").check().should("be.checked");
    cy.get("#uniform-optin>span>input").check().should("be.checked");
    //cy.get('h2.tittle.text-center>b').should('contain.text','Address Information')
    cy.get("#first_name").type(user.firstName);
    cy.get("#last_name").type(user.lastName);
    cy.get("#company").type(user.company);
    cy.get("#address1").type(user.address1);
    cy.get("#address2").type(user.address2);
    cy.get("#country").select(user.country);
    cy.get("#state").type(user.state);
    cy.get("#city").type(user.city);
    cy.get("#zipcode").type(user.zipcode);
    cy.get("#mobile_number").type(user.mobile);
    cy.get('button[data-qa="create-account"]').click(); //create account button is clicking
    cy.contains("a", "Home").click(); //Home Button
    //cy.contains("a", "Delete Account").click(); // delete acount button
   cy.contains("a", "Logout").click();// If we have to login with these accounts

  });

  //Custom commands for the Sign in

   Cypress.Commands.add("Login", (cred) => {
    cy.visit("https://automationexercise.com/");
    cy.log("Login Testing");
    cy.contains("a", "Signup / Login").click();
    cy.url().should("include", "/login");
    cy.get("div.login-form>h2").should("contain.text", "Login to your account");

    cy.get('input[data-qa="login-email"]').type(cred.email);
    cy.get('input[data-qa="login-password"]').type(cred.password);
    cy.get('button[data-qa="login-button"]').click();
    // const username = cred.email
    //   .split("@")[0] // removes @gmail.com
    //   .replace(/[0-9]/g, ""); // removes numbers

    // cy.log(username); // hijoy
  cy.contains(`Logged in as ${cred.firstName} ${cred.lastName}`)
    cy.contains('a', 'Logout', { timeout: 10000 }).click()

  });

   //Sign up with negative scenario
         
    Cypress.Commands.add("Signup_Negative", () => {
    
    cy.visit("https://automationexercise.com/");
    cy.contains("a", "Signup / Login").click();
    cy.url().should("include", "/login");

    cy.get("div.signup-form>h2").should("contain.text", "New User Signup!");
    cy.get('input[data-qa="signup-name"]').type("hdsjkfh");
    //Here I am entering in valid email it should not be proceed
    // cy.get('input[data-qa="signup-email"]').type("fghhg");
    cy.get('input[data-qa="signup-email"]').type("fghhg78@gmail.com");
    cy.get('button[data-qa="signup-button"]').click();

    //Check the Account information page
    cy.get("div.login-form>h2>b").should(
      "contain.text",
      "Enter Account Information"
    );

    cy.get('div.radio>span>input[type="radio"]').check().should("be.checked");
    cy.get("#password").type("ghjhjhj");
    cy.get("#days").select("12");
    cy.get("#months").select("January");
    cy.get("#years").select("2001");
    //click on two check box
    cy.get("#uniform-newsletter>span>input").check().should("be.checked");
    cy.get("#uniform-optin>span>input").check().should("be.checked");
    //cy.get('h2.tittle.text-center>b').should('contain.text','Address Information')
    // Form should accept the invalid data like numbers also inside the name

    cy.get("#first_name").type("456789");
    cy.get("#last_name").type(876543);

    //with valid data for the name and surname
    // cy.get("#first_name").type("Nisha");
    // cy.get("#last_name").type("hulmane");

    cy.get("#company").type("infouhjjkhdkj");
    cy.get("#address1").type("hjhjhj ghhggh ghghhg");
    cy.get("#address2").type("fdghj ghj hhghg hgghhg");
 
    //Here are some mandatory field that should be field 

    // cy.get("#country").select("India");
    // cy.get("#state").type("Maharashtra");
    // cy.get("#city").type("Mumbai");
    //cy.get("#zipcode").type("");

    cy.get("#mobile_number").type("00009");
    cy.get('button[data-qa="create-account"]').click(); //create account button is clicking
    //cy.contains("a", "Home").click(); //Home Button
    //cy.contains("a", "Delete Account").click(); // delete acount button
   //cy.contains("a", "Logout").click();// If we have to login with these accounts

  });


  
  //Custom commands for the SignIn Negative

   Cypress.Commands.add("SignNeg", () => {
    cy.visit("https://automationexercise.com/");
    cy.log("Login Testing");
    cy.screenshot('SignIn_Neg_Homepage');
    cy.contains("a", "Signup / Login").click();
    cy.url().should("include", "/login");
    cy.get("div.login-form>h2").should("contain.text", "Login to your account");


    //valid cred
    // cy.get('input[data-qa="login-email"]').type("priya.n05@gmail.com");
    // cy.get('input[data-qa="login-password"]').type("Priya@505")
    
    //invalid cred
    cy.get('input[data-qa="login-email"]').type("priya.5@gmail.com");
    cy.get('input[data-qa="login-password"]').type("ghfh");
   



    cy.get('button[data-qa="login-button"]').click()
    cy.screenshot('SignIn_Neg_Validation');
    // const username = cred.email
    //   .split("@")[0] // removes @gmail.com
    //   .replace(/[0-9]/g, ""); // removes numbers

    // cy.log(username); // hijoy

    //cy.contains('a', 'Logout', { timeout: 10000 }).click()

  });