const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM5Y2I2YTJkLTNkZjMtNDAwNC1hNTEwLTJmYWY5MTIxNWFkYy0xNzQ1NDk5MzM0Nzg2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDRiYWM0ODctMGU4Ny00ZTUzLTgzZGQtMzA4MThmYzA3YzVhIiwidHlwZSI6InQifQ.mz50Grk0j8Y_f56I53gkSWmkmXiKHZRhVdWxTYLoKz8'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
