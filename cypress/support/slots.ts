/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      addSlots(line: number, quantity: string): void;
    }
  }
}


//custom commands created for adding the slots by giving number of parameters.
Cypress.Commands.add('addSlots', (line: number, quantity: string) => {
  cy.get("[id='middle-left']").should('be.visible').within(() => {
    cy.get("[class='jq-basket-item product-item'][data-producttype='TICKETGA']").eq(line).scrollIntoView().should('be.visible').within(() => {
      cy.get("[name='quantity']").should('be.enabled').select(`${quantity}`).invoke('val').should('deep.equal', `${quantity}`);
      cy.wait(500);
    })
  })
})


export { };
