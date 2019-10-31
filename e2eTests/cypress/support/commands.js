import { isWrappedInIframe } from './config.js'

Cypress.Commands.add('findBy', (selector) => {
  if (isWrappedInIframe()) {
    return cy.get('#iframe-content').iframe().find(selector)
  } else {
    return cy.get(selector)
  }
})

Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
  return new Cypress.Promise(resolve => {
          resolve($iframe.contents().find('body'));
  });
});
