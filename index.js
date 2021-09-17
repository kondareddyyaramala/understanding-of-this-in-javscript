// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// This below object helps us understand how the this gets resolved in arrow functions vs
// the regular objects

const v = {
  af: 'Hello',
  bg: 'World',
  call: function () {
    let a = 'Method';
    console.log('Inside the method function', this);
    return {
      val: 'Inner method',
      callInner: function () {
        console.log('Inside the inner method function', this);
      },
    };
  },
  arrow: () => {
    let a = 'Arrow';
    console.log('Inside the arrow function', this);
    return {
      val: 'Inner arrow func',
      arrowInner: () => {
        console.log('Inside the inner arrow function', this);
      },
    };
  },
  callOuter: function () {
    let a = 'Arrow';
    console.log('Inside the arrow function', this);
    return {
      val: 'Inner arrow func',
      arrowInner: () => {
        console.log('Inside the inner arrow function', this);
      },
    };
  },
};

console.log(v.call().callInner());
console.log(v.arrow().arrowInner());
console.log(v.callOuter().arrowInner());
