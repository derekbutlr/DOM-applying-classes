// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one (1) {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE
function two (2) {
  var two = document.getElementById('two')
  one.classList.add('green')
}

// CREATE FUNCTION three HERE
function three (3) { 

  var three = document.getElementById('three')
  one.classList.add('purple')
}

// CREATE FUNCTION makeVisible HERE
