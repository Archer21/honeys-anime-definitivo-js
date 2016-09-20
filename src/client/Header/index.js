var empty = require('empty-element')
var template = require('./template')
var socialAuth = require('./components/social-auth/')
var loginForm = require('./components/login-form/')
var banner = require('./components/banner/')
var navigationBar = require('./../Navigation/')

module.exports = function header (ctx, next) {
  var el = document.getElementById('header')
  empty(el).appendChild(template(socialAuth, loginForm, banner, navigationBar)) 
  next()
}












