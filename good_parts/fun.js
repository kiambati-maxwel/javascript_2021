// fun with functions

function funky(o) {
  o = null;
}
var x = [];
funky(x);
console.log(x);

function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
}
var x = 1,
  y = 2;
swap(x, y);
console.log(x);

// binary function
function add(first, second) {
  return first + second;
}
function sub(first, second) {
  return first - second;
}
function mul(first, second) {
  return first * second;
}

// identity f
function identityf(x) {
  return function () {
    return x;
  };
}

// 2 invoncation function a highering q
function addf(first) {
  return function (second) {
    return first + second;
  };
}
console.log(addf(1)(2));

// binary function collablr with two invocations
function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second);
    };
  };
}

var addff = liftf(add);
console.log(addf(3)(4));
console.log(liftf(mul)(5)(6));

// lift f is a higher order function that takes functions as parameters
// and returns functions
