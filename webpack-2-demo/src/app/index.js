import _ from 'lodash';
require('../css/style.css');

//var moment = require('moment');
//console.log(moment().format());
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack','yang'], ' ');

  return element;
}

document.body.appendChild(component());
