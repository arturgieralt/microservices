/* global Cypress */
// yarn cypress:run --env host=localhost,TAGS=@ui

// Cypress baseUrl to configuration map
const environments = {
    'http://localhost:3001/': {
      'appUrl': 'http://localhost:3001/',
      'iframe': false
    },
    'http://localhost:3000/': {
      'appUrl': 'http://localhost:3000/portal/service1',
      'iframe': true
    }
  }
  const baseUrl = Cypress.config('baseUrl')
  console.log(baseUrl)

  const config = environments[baseUrl]
  
  export const getAppUrl = () => config['appUrl']
  export const isWrappedInIframe = () => config['iframe']
   