import isInViewport from './components/isInViewport.js'
import menuMobile from './components/menuMobile.js'

const Fluffy = require('./components/fluffy.js');

// Prints 2.1.0
console.log(Fluffy.version);

// Start automatic detection

Fluffy.create(myElement);
