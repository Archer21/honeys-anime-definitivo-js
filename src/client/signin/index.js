var page = require('page')
var yo = require('yo-yo')
var empty = require('empty-element')

var header = require('./../Header')
var template = require('./template')

page('/signin', function() {
  var el = document.getElementById('layout')
  empty(el).appendChild(template)
}) 









