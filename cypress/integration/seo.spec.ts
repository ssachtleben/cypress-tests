/// <reference types="cypress" />
describe('Seo Tests', () => {
    beforeEach(() => {
        cy.visit('https://magazine-display.stage.eu.magalog.net/prophet/area/ci-magento19/magazine');
    });

    it('styla container exists', () => {
        cy.get('[data-styla-client]');
    });

    it('styla container has children', () => {
        cy.get('[data-styla-client]').children().should('not.have.length', 0);
    });

    it('has headline', () => {
        cy.get('h2').contains('Magazine');
    });
});
