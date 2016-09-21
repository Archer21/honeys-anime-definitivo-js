var yo = require('yo-yo')

module.exports = function tag (tag) {
  return yo`
    <li class="Tag">
      <a class="Tag-link" href="#">${tag}</a>
    </li>
  `
}