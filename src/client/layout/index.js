var yo = require('yo-yo')

module.exports = function (content) {
  return yo`
    <div class="content">
      ${content}
    </div>
  `
}
