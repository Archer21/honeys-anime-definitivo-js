var yo = require('yo-yo')

module.exports = function (entrie) {
  return yo `
    <article class="Entrie">
      <header class="Entrie-header">
        <h2 class="Entrie-title">
          <a href="#">${ entrie.title }</a>
        </h2>
      </header>
      
      <section class="Entrie-body">
        <div class="Entrie-imageContainer">
          <img src="${ entrie.image }" alt="${ entrie.image }">
        </div>
        <div class="Entrie-description">
          <a class="Entrie-tag" href="#">${ entrie.tag }</a>
          <p class="Entrie-date">${ entrie.date }</p>
          <p class="Entrie-text">${ entrie.description }</p>
        </div>
      </section>  
    </article>
  `
}











