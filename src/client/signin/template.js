var yo = require('yo-yo')

var el = yo`
  <div class="Signin">
    <div class="Signin-imageContainer">
      <img class="Signin-image" src="nishikino-maki.png" />
    </div>
    <div class="Signin-body">
      <h1 class="Signin-title">Honey's Anime</h1>
      <a class="Signin-facebook" href="#">Iniciar sesion con facebook</a>
      <form class="Signin-form">
        <input class="Signin-input" type="text" placeholder="Nombre de usuario" />
        <input class="Signin-input" type="password" placeholder="Contraseña"/>
        <input class="Signin-submit" type="submit" value="Iniciar Sesion" />
      </form>
    </div>
  </div>
`

module.exports = el






