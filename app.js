import $ from 'jquery';
window.$ = window.jQuery = $;

import './app.scss';

// require images
const images = require('./images/*.{png,jpg}');

$(document).ready(function () {
  console.log('Inited');
});
