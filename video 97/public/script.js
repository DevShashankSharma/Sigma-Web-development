const getRandomNumber = () => {
  return (Math.random() * 5).toFixed();
};

let Uname = ["John", "Jane", "Bob"];
let salary = [1000, 2000, 3000];
let language = ["JavaScript", "Python", "Java"];
let city = ["New York", "Los Angeles", "Chicago"];
let isManager = [true, false];

//Add data to database
function postData(data) {
  // const UserName = document.getElementById('UserName').value;
  // const salary = document.getElementById('salary').value;
  // const language = document.getElementById('language').value;
  // const city = document.getElementById('city').value;
  // const isManager = document.querySelector('input[name="isManager"]:checked').value;

  // const data = {
  //   name: UserName,
  //   salary: parseInt(salary),
  //   language: language,
  //   city: city,
  //   isManager: isManager
  // };

  fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      // Handle success, if needed
    })
    .catch((error) => {
      console.log("Error:", error);
      // Handle error, if needed
    });
}

//Check data in database and add if not exists and remove if exists
const CheckData = (data) => {
  const queryString = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

  // Append the query string to the URL
  const url = `http://localhost:3000/check?${queryString}`;
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.length == 0) {
        console.log(result);
        postData(data);
      } else {
        console.log("Already exists");
        removeData(data);
      }
    })
    .catch((error) => {
      console.log("Error:", error); // Handle error, if needed
    })
};

//Remove data from database
const removeData = (data) => {
  const queryString = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

  // Append the query string to the URL
  const url = `http://localhost:3000/remove?${queryString}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      // Handle success, if needed
    })
    .catch((error) => {
      console.log("Error:", error);
      // Handle error, if needed
    });
};

//Generate data
const generateData = async () => {
  for (let i = 0; i < 1; i++) {
    const data = {
      name: Uname[Math.floor(Math.random() * Uname.length)],
      salary: salary[Math.floor(Math.random() * salary.length)],
      language: language[Math.floor(Math.random() * language.length)],
      city: city[Math.floor(Math.random() * city.length)],
      isManager: isManager[Math.floor(Math.random() * isManager.length)],
    };
    CheckData(data);
  }
};
