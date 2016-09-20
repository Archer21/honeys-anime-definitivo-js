var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var Header = require('./../Header')
var Footer = require('./../Footer')

var entries = [
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
var animes = [
  {
    title: "Shokugeky no souma",
    image: 'shokugeky-small.jpg',
    chapters: 25,
    publishDate: new Date()
  },
  {
    title: "Natsuyuki Rendezvous",
    image: "natsuyuki-rendezvous-small.jpg",
    chapters: 12,
    publishDate: new Date()
  },
  {
    title: "Love Live",
    image: "lovelive-small.jpg",
    chapters: 25,
    publishDate: new Date()
  }
]

var tags = [
  'Comedy', 'Anime Chart',
  'Anime Expo', 'Cosplay',
  'Characters', 'Anime Winter',
  'Comedy', 'Anime Chart',
  'Anime Expo', 'Cosplay',
  'Characters', 'Anime Winter',
  'Comedy', 'Anime Chart',
  'Anime Expo', 'Cosplay',
  'Characters', 'Anime Winter',
  'Comedy', 'Anime Chart',
  'Anime Expo', 'Cosplay',
  'Characters', 'Anime Winter'
]
page('/', Header, function () {
  var layout = document.getElementById('layout')
  var footer = document.getElementById('footer')
  empty(layout).appendChild(template(entries, animes, tags))
  empty(footer).appendChild(Footer)
})









