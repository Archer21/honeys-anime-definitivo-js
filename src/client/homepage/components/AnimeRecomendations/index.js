var yo = require('yo-yo')
var anime = require('./../../../Anime')

module.exports = function (recommendations) {
  return yo`
    <aside class="Recommendations">
      <h1 class="Recommendations-title">Anime Recommendations</h1>
      <section class="Recommendations-container">
        ${
          recommendations.map(function (item) {
            return anime(item)
          })
        }
      </section>
    </aside>
  `
}
































