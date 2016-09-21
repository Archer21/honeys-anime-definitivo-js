var yo = require('yo-yo')

var el = yo`
  <div class="Signup">
    <div class="Signup-imageContainer">
      <img class="Signup-image" src="signup.png" />
    </div>
    <div class="Signup-body">
      <h1 class="Signup-title">Honey's Anime</h1>
      <a class="Signup-facebook" href="#">Registrate con facebook</a>
      <form class="Signup-form">
        <input class="Signup-input" type="text" placeholder="Nombre de usuario" />
        <input class="Signup-input" type="email" placeholder="Email" />
        <input class="Signup-input" type="password" placeholder="Contraseña"/>
        <input class="Signup-submit" type="submit" value="Registrarse" />
      </form>
      
      <p class="Signup-message">Ya tienes una cuenta? <a class="Signup-register" href="/signin">Inicia Sesion</a></p>
    </div>
  </div>
`

module.exports = el






