var yo = require('yo-yo')
var tag = require('./components/Tag')

module.exports = function tags (tags) {
  return yo`
    <div class="Tags">
      <ul class="Tags-list">
        ${
          tags.map(function (item) {
            return tag(item)
          })
        }
      </ul>
    </div>
  `
}











