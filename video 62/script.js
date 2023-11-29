const adjectives = {
  0: "Crazy",
  1: "Amazing",
  2: "Fire",
  3: "Cool", 
  4: "Awesome",
  5: "Fast",
  6: "Smart",
  7: "Cool", 
  8: "Cozy",
  9: "Fragrant",
  10: "Artisanal",
};

const Shop_Name = {
  0: "Engine",
  1: "Foods",
  2: "Garments",
  3: "Electronics",
  4: "Books",
  5: "Clothes",
  6: "Shoes",
  7: "Sports",
  8: "Games",     
  9: "Cars",
  10: "Bikes",
};

const Another_Word = {
  0: "Bros",
  1: "Limited",
  2: "Hub",
  3: "Crony",
  4: "Chump",
  5: "Dope",
  6: "Trendy",
  7: "Art",
  8: "Venom",
  9: "Racer",
  10: "Connate",
};

let ad = parseInt((Math.random() * 10));
let sn = parseInt((Math.random() * 10));
let aw = parseInt((Math.random() * 10));

// let ad = parseInt((Math.random() * 10) / 4);
// let sn = parseInt((Math.random() * 10) / 4);
// let aw = parseInt((Math.random() * 10) / 4);

// console.log(ad, sn, aw);

console.log(adjectives[ad] + " " + Shop_Name[sn] + " " + Another_Word[aw]);