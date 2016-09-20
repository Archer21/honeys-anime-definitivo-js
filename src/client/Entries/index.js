var yo = require('yo-yo')
var entrie = require('./components/Entrie')

module.exports = function (newEntries) {
  return yo`
    <section class="Entries">
      <h1 class="Entries-title">New Entries</h1>
      ${
        newEntries.map(function (newEntrie) {
          return entrie(newEntrie)
        }) 
      }
    </section>
  `
}












