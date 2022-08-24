

describe(`Login to admin panel - one happy and one sad path`, () => {
    const user = require('C:/Study/AutoJS/07_07/cypress/fixtures/admin_login.json');
    user.forEach(user  => {
        it(`Login with to admin panel  - ${user.name} path`, () => {
        cy.login(user.login,user.pass);
        if(user.name == "happy"){
            cy.contains('Администраторррская').should('be.visible');
        }else{
            cy.get("input[name='email']").then($el => $el[0].checkValidity()).should('be.false')
        }
    });
    })
    
})