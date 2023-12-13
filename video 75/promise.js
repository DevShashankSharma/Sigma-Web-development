console.log("This is a promise");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("I am not done");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Shashank");
    }, 3000);
  }
});

// prom1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
      reject("I am not done 2");
    } else {
      setTimeout(() => {
        console.log("Yes I am done 2");
        resolve("Shashank2");
      }, 2000);
    }
});


// let p3 = Promise.all([prom1, prom2]);
// p3.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// })

// let p4 = Promise.allSettled([prom1, prom2]);
// p4.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// })

let p5 = Promise.race([prom1, prom2]);
p5.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})