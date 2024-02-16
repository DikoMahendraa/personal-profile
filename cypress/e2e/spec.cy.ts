describe(
  'template spec',
  {
    viewportWidth: 1920,
    viewportHeight: 1000,
  },
  () => {
    it('passes', () => {
      cy.visit('/')

      cy.intercept('https://jsonplaceholder.typicode.com/posts').as('getData')

      cy.wait('@getData').then((response) => console.log('====>', response))
      // cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then(
      //   (response) => {
      //     console.log('=======>', response)
      //     expect(response.status).eq(200)
      //   }
      // )

      // cy.get('[data-testid=href-portofolio]').click()

      // cy.url().should('include', 'en/portofolio')
    })
  }
)
