describe('Booking a ticket', function () {
    
    let hallName;
    beforeEach(function () {
        const user = require('../fixtures/admin_login.json');
        cy.login(user[0].login,user[0].pass);

        //cy.get('#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div > [class = "conf-step__seances-movie-title"]').as("contrl");


        //#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div > p.conf-step__seances-movie-title
        //cy.get('conf-step__list >li(1)').invoke('text').as(hallName)
        //conf-step__seances[conf-step__seances-movie]> .conf-step__seances-title
        
        //cy.get('#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div > [class = "conf-step__seances-movie-title"]').invoke('text').as(hallName)

        //hallName = cy.get('#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div > [class = "conf-step__seances-movie-title"]').invoke('text').as("text");
        
        
        
        //cy.get('#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div > [class = "conf-step__seances-movie-title"]').invoke('text').as("text");
        
        
        //cy.wrap('#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div > [class = "conf-step__seances-movie-title"]').as("text");


        //cy.get('conf-step__seances[conf-step__seances-movie]> .conf-step__seances-title').invoke('text').as(hallName)
        //#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div
        //console.log(hallName);
    })

    it('Should get ticket to a hall getting from admin panel', function ()  {
        cy.get('#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div > [class = "conf-step__seances-movie-title"]').invoke('text').as('te');
        /*
        cy.get('#grid-session > div > div.conf-step__seances > div:nth-child(2) > div > div > [class = "conf-step__seances-movie-title"]').should(($div => {
          hallName = $div.text();
          console.log(hallName);  
        }))
        .then(
            cy.visit("/")
            .get('a.page-nav__day:nth-child(2)').click()
            .contain(hallName).click()
            .get(".buying-scheme__chair_standart:not(.buying-scheme__chair_taken)").click()

        );

*/

        cy.visit("/");
        cy.get('a.page-nav__day:nth-child(2)').click();
        //cy.contain(this.hallName).click();
        //console.log(contrl);
        //cy.contain('@contrl').click();
        //cy.contain(this.text).click();
        cy.contain(this.te).click();
        cy.get(".buying-scheme__chair_standart:not(.buying-scheme__chair_taken)").click();
        cy.contain("Забронировать").click();
        cy.contains('Вы выбрали билеты:').should('be.visible');
        
    })
})