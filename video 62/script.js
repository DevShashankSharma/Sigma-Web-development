const adjectives = {
  0: "Crazy",
  1: "Amazing",
  2: "Fire",
};

const Shop_Name = {
  0: "Engine",
  1: "Foods",
  2: "Garments",
};

const Another_Word = {
  0: "Bros",
  1: "Limited",
  2: "Hub",
};

let ad = parseInt((Math.random() * 10) / 4);
let sn = parseInt((Math.random() * 10) / 4);
let aw = parseInt((Math.random() * 10) / 4);

// console.log(ad, sn, aw);

console.log(adjectives[ad] + " " + Shop_Name[sn] + " " + Another_Word[aw]);