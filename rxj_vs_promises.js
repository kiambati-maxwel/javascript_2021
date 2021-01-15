// instantiate with new
// pass a function that will pass a reference to a resolve function
// resolver runs async task when done passes the value to resolve

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello from a Promise!");
  }, 2000);
});

promise.then((value) => console.log(value));

// rxjs
// initialize with new key word
// pass in a function to handle async task
// observer passes in  a reference to an object called observer
// then we call observer.next() to trigger and emit value to the observers consumer

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const observable = new Observable((observer) => {
  setTimeout(() => {
    observer.next("Hello from a Observable!");
  }, 2000);
});

// subscribe to observer to get the value
observable.subscribe((value) => console.log(value));

// multiple values

const interval = new Observable((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    observer.next(count++);
  }, 1000);

  // once we stop listening to values clear the interval
  return () => {
    clearInterval(interval);
  };
});

// subscribe to interval
// interval.subscribe((value) => console.log(value));
//----1----2----3---->

// to stop the multiple values once done

// const subscription = interval.subscribe((value) => console.log(value));
// setTimeout(() => subscription.unsubscribe(), 3000);

// rxjs operators
// pipe method takes in operator functions

// map example

interval
  .pipe(map((value) => value * value))
  .subscribe((value) => console.log(value));
