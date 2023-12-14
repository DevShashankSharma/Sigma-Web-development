// async function getData() {
//   // Simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

async function getData() {
  // Simulate getting data from a server

  //   let x = fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
              title: "foo",
              body: "bar",
              userId: 1,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
  let data = await x.json()
  // // let data = await x.text();
  // console.log(data);
  return data;
}
async function main() {
  console.log("Loading modules");

  console.log("Do something else");

  console.log("Load data");
  let data = await getData();

  // data.then((v) => {
  //   console.log(data);
  //   console.log("process data");
  //   console.log("task 2");
  // });

  console.log(data);
  console.log("process data");
  console.log("task 2");
}

main();

// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });
