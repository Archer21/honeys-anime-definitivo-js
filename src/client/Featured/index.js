var yo = require('yo-yo')
var slider = require('./../Slider')
var featuredList = require('./components/FeaturedList')

module.exports = yo`
  <section class="Featured">
    ${slider}
    ${featuredList}
  </section>
`
