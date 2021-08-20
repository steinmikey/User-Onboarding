describe("User On-boarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const inputFirstName = () => cy.get(`input[name=first_name]`);
  const inputLastName = () => cy.get(`input[name=last_name]`);
  const inputEmail = () => cy.get(`input[name=email]`);
  const inputPassword = () => cy.get(`input[name=password]`);
  const selectAgree = () => cy.get(`input[name=terms]`);
  const submit = () => cy.get(`button[name=submit]`);

  it("Testing testing", () => {
    expect(4 + 7).to.equal(11);
  });

  it("The correct elements are showing", () => {
    inputFirstName().should("exist");
    inputLastName().should("exist");
    inputEmail().should("exist");
    inputPassword().should("exist");
    selectAgree().should("exist");
    submit().should("exist");
  });

  describe("Name, email, and password fields", () => {
    it("Get name inputs, enter names", () => {
      inputFirstName().type("Misha");
      inputFirstName().should("have.value", "Misha");
      inputLastName().type("Ku");
      inputLastName().should("have.value", "Ku");
    });
    it("Get email input, enter email", () => {
      inputEmail().type("abd@123.com");
      inputEmail().should("have.value", "abd@123.com");
    });
    it("Get password, enter password", () => {
      inputPassword().type("abc123");
      inputPassword().should("have.value", "abc123");
    });
  });

  describe("Terms of service select, deslect", () => {
    it("Agree to terms, check for checked", () => {
      selectAgree().check().should("be.checked");
    });
    it("unagree to terms, check for unchecked", () => {
      selectAgree().check().should("be.checked").uncheck().should("not.be.checked");
    });
  });

  describe("Check to see if user can submit the form data", () => {
    it("Can submit new user when all fields filled out correctly", () => {
      submit().should("be.disabled");
      inputFirstName().type("Misha");
      inputLastName().type("Ku");
      inputEmail().type("abd@123.com");
      inputPassword().type("abc123");
      selectAgree().check();
      submit().should("not.be.disabled").click();
    });
    it("can clear form after submit", () => {
      inputFirstName().type("Misha");
      inputLastName().type("Ku");
      inputEmail().type("abd@123.com");
      inputPassword().type("abc123");
      selectAgree().check();
      submit().click();
      inputFirstName().should("have.value", "");
      inputLastName().should("have.value", "");
      inputEmail().should("have.value", "");
      inputPassword().should("have.value", "");
      selectAgree().should("not.be.checked");
      submit().should("be.disabled");
    });
  });
  describe("Leave submit disabled if any input not filled out correctly, or if agree to terms box not checked", () => {
    it("can leave submit disabled until form filled correctly", () => {
      inputFirstName().type("Misha");
      inputLastName().type("Ku");
      inputEmail().type("abd@123.com");
      inputPassword().type("abc123");
      selectAgree().check();
      submit().should("not.be.disabled");
      inputFirstName().clear();
      submit().should("be.disabled");
      inputFirstName().type("Misha");
      submit().should("not.be.disabled");
      inputLastName().clear();
      submit().should("be.disabled");
      inputLastName().type("Ku");
      submit().should("not.be.disabled");
      inputEmail().clear();
      submit().should("be.disabled");
      inputEmail().type("abd@123.com");
      submit().should("not.be.disabled");
      inputPassword().clear();
      submit().should("be.disabled");
      inputPassword().type("abc123");
      submit().should("not.be.disabled");
      selectAgree().uncheck();
      submit().should("be.disabled");
      selectAgree().check();
      submit().should("not.be.disabled");
    });
  });
});
