class networkSimulations{

 goOffline = () => {
    cy.log('**go offline**')
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.enable',
        })
    })
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.emulateNetworkConditions',
          params: {
            offline: true,
            latency: -1,
            downloadThroughput: -1,
            uploadThroughput: -1,
          },
        })
    })
  }

networkThrottling= () => {
    cy.intercept(
        '/*',
        (req) => {
          req.on('response', (res) => {
            // Throttle the network response to 20KB.
            console.log(Cypress.env('networkBandwidth'))
            res.setThrottle(Cypress.env('networkBandwidth'))
          })
        }
      )
      }
}

export default networkSimulations;