const fillSignupField = () => {
  cy.get("#email").click({ force: true }).type("higakijin@example.com");
  cy.get("#password").click({ force: true }).type("123456");
  cy.get("#passwordConfirmation").click({ force: true }).type("123456");
};

const fillLoginField = () => {
  cy.get("#email").click({ force: true }).type("higakijin@example.com");
  cy.get("#password").click({ force: true }).type('123456')
}

const submit = () => {
  cy.get("#submitButton").click({ force: true });
};

describe("サインアップのテスト", () => {
  it("サインアップに成功したとき、/loginページに移動すること", () => {
    cy.visit("/signup");

    fillSignupField();
    submit();

    cy.url().should("include", "/login");
  });

  it("サインアップに失敗したとき、他のページに移動せず/signupページのままであること", () => {
    // すでにemailが登録されているので、ユニークネス制約がかかる。

    cy.visit("/signup");

    fillSignupField();
    submit();

    cy.url().should("include", "/signup");
  });
});

describe("ログインのテスト", () => {
  it("ログインに成功したとき、/jobsページに遷移すること", () => {
    cy.visit('/login')

    fillLoginField()
    submit()

    cy.url().should("include", "/jobs")
  });
});

// describe("ログアウトのテスト", () => {
//   it("成功時、ルートページにリダイレクトされること", () => {
//     cy.visit('/profile')

//     cy.get("#signOutButton").click({ force: true })
    
//     cy.url().should("include", "/")
//   }) 
// })

// describe("ユーザー削除のテスト", () => {
  // it("成功時、ルートページにリダイレクトされること") 
// })