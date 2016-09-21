var yo = require('yo-yo')
var tags = require('./../Tags')

module.exports = function footer (items) {
  return yo`
    <div>
      ${tags(items)}
      <ul class="Footer-list">
        <li class="Footer-listItem">
          <a href="#" class="Footer-listLink">© 2016 qdopp, Inc.</a>
        </li>
        <li class="Footer-listItem">
          <a href="#" class="Footer-listLink">Our Writers</a>
        </li>
        <li class="Footer-listItem">
          <a href="#" class="Footer-listLink">Terms of Service</a>
        </li>
        <li class="Footer-listItem">
          <a href="#" class="Footer-listLink">Privacy Policy</a>
        </li>
        <li class="Footer-listItem">
          <a href="#" class="Footer-listLink">Guidelines</a>
        </li>
        <li class="Footer-listItem">
          <a href="#" class="Footer-listLink">Advertising</a>
        </li>
        <li class="Footer-listItem">
          <a href="#" class="Footer-listLink">About us</a>
        </li>
      </ul>
    </div>
  `
}