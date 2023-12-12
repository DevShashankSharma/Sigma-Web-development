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
  div.innerHTML = `<div class="card">
                            <div class="card-img">
                                <div class="timestamp">${timestamp}</div>
                            </div>
                            <div class="card-content">
                                <div class="card-title">${title}</div> 
                                <div class="about">
                                    <div class="card-author">${author}</div>
                                    <div class="card-date">${published_date}</div>
                                    <div class="card-views">${views}</div>
                                </div>
                            </div>
                        </div>`;

  document.querySelector(".container").appendChild(div);
  let i = document.querySelector(".card-img");
  i.style.backgroundImage = `url(${url})`;
  i.style.backgroundSize = "cover";
  i.style.backgroundPosition = "center";
  i.style.backgroundRepeat = "no-repeat";
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
