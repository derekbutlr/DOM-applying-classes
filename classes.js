// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
one();
two();
three();

}

function one() {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE
function two() {
  var two = document.getElementById('two')
  one.classList.add('green') 
}

// CREATE FUNCTION three HERE
function three () { 

  var three = document.getElementById('three')
  one.classList.add('purple')
}

// CREATE FUNCTION makeVisible HERE
