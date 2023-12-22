let title = document.querySelector(".title");

const randomDelay = (data) => {
  let time = Math.floor(Math.random() * 7) + 3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time * 1000);
  });
};

const setData = async (data) => {
  let text = await randomDelay(data);
  let div = document.createElement("div");
  div.innerHTML = ">>> " + text; 
  title.appendChild(div);
};

const test = () => {
  let last = document.body.getElementsByTagName("div");
  last = last[last.length - 2];
  if (last.innerHTML.endsWith("...")) {
    last.innerHTML = last.innerHTML.slice(0, -3);
  }
  if (last.innerHTML.endsWith("..")) {
    last.innerHTML = last.innerHTML.slice(0, -2);
  }
  if (last.innerHTML.endsWith(".")) {
    last.innerHTML = last.innerHTML.slice(0, -1);
  }
};

let text = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
  "Hacking Completed",
];

const hacking = async () => {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("..."))
      last.innerHTML = last.innerHTML.slice(0, -3);
    else last.innerHTML = last.innerHTML + ".";
  }, 300);

  for (let i = 0; i < text.length; i++) {
    await setData(text[i]);
    test();
  }

  clearInterval(t);
};

hacking();
