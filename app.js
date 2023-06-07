const obj = [
  { emoji: "🌍​", text: "Duniya gol hai tu maadarchod hai!!" },
  { emoji: "​​​​​🐒​", text: "Oo aa ee" },
  { emoji: "🐵​", text: "Baag Maadarchod" },
  { emoji: "🙊", text: "maadarchod pencho" },
  { emoji: "🙉", text: "ohh yeh fuck!!" },
  { emoji: "🙈", text: "Off the fuckin porn" },
];

const container = document.querySelector("div");
let emoji = document.createElement("h1");
let heading = document.createElement("h2");

emoji.innerHTML = obj[0].emoji;
heading.innerHTML = obj[0].text;

container.appendChild(emoji);
container.appendChild(heading);
let i = 0;

if (i < obj.length) {
  emoji.addEventListener("click", () => {
    console.log(i++);
    if (i === obj.length) {
      i = 0;
    }
    emoji.innerHTML = obj[i].emoji;
    heading.innerHTML = obj[i].text;
  });
}


const num1 = 2;
for (let index = 0; index <= 20 ; index++) {
  let num3 = num1 * i
  console.log(`${num1} * ${index} = ${num3}`);
}




// obj.map((Element) => {
// })

// let i = 0;
// obj.forEach((element) => {
//     if(i < obj.length - 1){
//       emoji.addEventListener('click', () => {

//       })
//     }
// });
