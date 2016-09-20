var yo = require('yo-yo')

module.exports = function (anime) {
  return yo`
    <article class="Anime">
      <div class="Anime-imageContainer">
        <img class="Anime-image" src="${ anime.image }">
      </div>
      <h2 class="Anime-title">${ anime.title }</h2>
    </article>
  `
}
















