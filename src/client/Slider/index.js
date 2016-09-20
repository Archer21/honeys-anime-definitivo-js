var yo = require('yo-yo')

var el = yo`
  <div class="Slider main-carousel" data-flickity='{ "cellAlign": "left", "contain": true, "autoPlay": true }'>
    <div style="background: darkorange" class="Slider-slide carousel-cell">
      <img src="article-slide-1.jpg" class="Slider-image"/><a href="#" class="Slider-link">
      <h3 class="Slider-title">Koyomimonogatari chapter 12</h3>
      <p class="Slider-description">Araragi koyomi is a highschool student, he meets oshino shinobu in...</p></a></div>
    
    <div style="background: darkred" class="Slider-slide carousel-cell">
      <img src="article-slide-2.jpg" class="Slider-image"/><a href="#" class="Slider-link">
      <h3 class="Slider-title">Claymore chapter 22</h3>
      <p class="Slider-description">I dont remember the Claymore description T_T...</p></a></div>
    
    <div style="background: hotpink" class="Slider-slide carousel-cell">
      <img src="article-slide-3.jpg" class="Slider-image"/><a href="#" class="Slider-link">
      <h3 class="Slider-title">D.Gray-man chapter 8</h3>
      <p class="Slider-description">Allen Walker is an exorcist, his friensd lenalee and lavi...</p></a>
    </div>
  </div>
`

module.exports = el