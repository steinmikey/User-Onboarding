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
      selectAgree().click().should("have.value", "on");
    });
    it("unagree to terms, check for unchecked", () => {
      //   selectAgree().check();
      selectAgree().should("have.value", "off");
    });
  });
});
