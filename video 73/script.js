console.log("Hello World");

document.querySelector("#url").addEventListener("keyup", function () {
  let url = document.querySelector("#url").value;
  let name = document.querySelector(".img-box");
  name.style.backgroundImage = `url(${url})`;
  name.style.backgroundSize = "cover";
  name.style.backgroundPosition = "center";
  name.style.backgroundRepeat = "no-repeat";
});

function createCard(url, timestamp, title, author, published_date, views) {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<div class="c-img">
                  <div class="card-img">
                      <img src="${url}">
                      <div class="timestamp">${timestamp}</div>
                  </div>
                </div>
                <div class="card-content">
                    <div class="card-title">${title}</div> 
                    <div class="about">
                        <div class="card-author">${author}</div>
                        <div class="card-date">${published_date}</div>
                        <div class="card-views">${
                          Math.round(views / 100) / 10
                        }K</div>
                    </div>
                </div> `;

  document.querySelector(".container").appendChild(div);
}

// createCard(
//   "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ",
//   "30:32",
//   "Welcome to JavaScript Tutorial",
//   "CWH",
//   "30-12-2021",
//   "200k"
// );

document.querySelector("#submit").addEventListener("click", function () {
  let name = document.querySelector("#cardName").value;
  let timestamp = document.querySelector("#timestamp").value;
  let title = document.querySelector("#detail").value;
  let author = document.querySelector("#author").value;
  let published_date = document.querySelector("#published-date").value;
  let views = document.querySelector("#views").value;
  let url = document.querySelector("#url").value;
  createCard(url, timestamp, title, author, published_date, views);
});
