var page = require('page')
var navigation = require('./Navigation')
var entries = require('./Entries')
var slider = require('./Slider')
var items = [
  {
    title: "Cartelera de anime del Otoño 2016",
    image: "entrie.jpg",
    tag: "Anime otoño 2016",
    date: "Sep 20, 2016",
    description: "Anime de Acción Bloodivores 60 years ago, a never before seen case of Insomnia plagued the earth. Unable to sleep, humanity gradually collapsed in insanity. Suicides and massive acts of violence became commonplace and society faced a very large problem. New drugs were rolled out to fight this “inso..."
  },
  {
    title: "Cartelera de anime del Otoño 2016",
    image: "entrie.jpg",
    tag: "Anime otoño 2016",
    date: "Sep 20, 2016",
    description: "Anime de Acción Bloodivores 60 years ago, a never before seen case of Insomnia plagued the earth. Unable to sleep, humanity gradually collapsed in insanity. Suicides and massive acts of violence became commonplace and society faced a very large problem. New drugs were rolled out to fight this “inso..."
  },
  {
    title: "Cartelera de anime del Otoño 2016",
    image: "entrie.jpg",
    tag: "Anime otoño 2016",
    date: "Sep 20, 2016",
    description: "Anime de Acción Bloodivores 60 years ago, a never before seen case of Insomnia plagued the earth. Unable to sleep, humanity gradually collapsed in insanity. Suicides and massive acts of violence became commonplace and society faced a very large problem. New drugs were rolled out to fight this “inso..."
  },
  {
    title: "Cartelera de anime del Otoño 2016",
    image: "entrie.jpg",
    tag: "Anime otoño 2016",
    date: "Sep 20, 2016",
    description: "Anime de Acción Bloodivores 60 years ago, a never before seen case of Insomnia plagued the earth. Unable to sleep, humanity gradually collapsed in insanity. Suicides and massive acts of violence became commonplace and society faced a very large problem. New drugs were rolled out to fight this “inso..."
  }
]

page('/test', function () {
  var el = document.querySelector('body')
  el.appendChild(navigation)
  el.appendChild(entries(items))
  el.appendChild(slider)
})











