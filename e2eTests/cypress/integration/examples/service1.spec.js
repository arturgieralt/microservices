/// <reference types="Cypress" />

import { getAppUrl } from "./../../support/config"


context('Service1', () => {
  it('should show data from parent Iframe', () => {
    cy.visit(getAppUrl())
    cy.get('#link-service-1').click()
    cy.findBy('#header').then(
      $header => {
        expect($header).to.have.text('Data from ParentIframe: token')
      }
    )
  })
})
