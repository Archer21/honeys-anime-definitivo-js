var yo = require('yo-yo')
var featured = require('./../Featured')
var entries = require('./../Entries')
var tags = require('./../Tags')
var recommendations = require('./components/AnimeRecomendations')
var layout = require('./../layout')

module.exports = function (newEntries, animes, tags) {
  var el = yo`
    <div>
      ${featured}
      <div class="Main">
        ${entries(newEntries)}
        ${recommendations(animes)}
      </div>
    </div>
  `
  return layout(el)
}
















