var yo = require('yo-yo')

module.exports = function (socialAuth, loginForm, banner, navigationBar) {
  return yo`
    <div class="Header-container">
      <section class="Header-socialContainer">
        ${socialAuth}
        ${loginForm}
      </section>
      ${banner}
      ${navigationBar}
    </div>
  `
}

