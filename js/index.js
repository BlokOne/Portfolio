const start = document.querySelector('.start'),
body = document.getElementById('body'),
header = document.querySelector('.header'),
navigation = document.querySelector('.header__navigation'),
calculatorApp = document.querySelector('.calculator__app'),
calculatorButtons = document.querySelector('.calculator__buttons'),
calculatorInput = document.querySelector('.calculator__input-wrap'),
inputRangeSite = document.querySelector('#input__range'),
bitrex = document.querySelector('.bitrex');


window.addEventListener('scroll', function() {
   if (this.scrollY < 100) {
      start.classList.remove('active')
      start.classList.remove('active1')
      body.classList.add('active')
      navigation.classList.remove('active')
   }
   else if (this.scrollY >= 150 && this.scrollY <= 160 ) {
      start.classList.add('active1')
      start.classList.remove('active')
   }
   else {
      start.classList.remove('active1');
      start.classList.add('active');
      body.classList.remove('active')
      header.classList.add('active')
      navigation.classList.add('active')
   }
})



const makeInput = function (i) {
   const input = document.createElement('input');
   input.id = i;
   input.classList.add("calculator__input")
   calculatorInput.append(input);
   const inputValue = document.querySelector('.calculator__input');
   inputValue.setAttribute("maxlength", 10)
   
}

let symbols = function(i,b) {
      const symbol = document.createElement('button');
      symbol.innerText = i; 
      symbol.classList.add("symbol")
      symbol.classList.add(`symbol__${b}`)
      symbol.setAttribute("onclick",`op='${i}'`)
      calculatorButtons.append(symbol);
   }

let buttonDelete = function(i,b) {
   const symbol = document.createElement('button');
   symbol.innerText = i; 
   symbol.classList.add("symbolAC")
   symbol.classList.add(`symbol__${b}`)
   calculatorButtons.append(symbol);
}
   
let equally = function() {
      const equally = document.createElement('button');
      equally.innerText = "="; 
      equally.classList.add('equally')
      equally.classList.add('calculator__buttons-enter')
      calculatorButtons.append(equally);
   }

const calculator = function () {
      makeInput ("input-calculator");
      const numbers = document.createDocumentFragment()
      for (i=0; i < 10; i++) {
         const num = document.createElement('button');
         num.innerText = i; 
         num.classList.add('num')
         num.classList.add(`num__${i}`)
         numbers.append(num);
      } 
      symbols("+","plus");
      symbols("-","minus");
      symbols("*","multiply");
      symbols("/","share");
      calculatorButtons.append(numbers)
      buttonDelete("AC","C");
      equally();
      const input  = document.querySelector('#input-calculator');
      
   }
   calculator();
   let a = "";
   let b = "";
   let op;
   let result = "a"
   calculatorButtons.addEventListener('click', function(e){
      const input  = document.querySelector('#input-calculator');
      let c = "";
      let result1 = "";
      if (input.value === "Ошибка" && e.target.classList[0] === 'num') {
         input.value = "";
         const a = e.target.innerText;
         input.value += a;
      }  else if (e.target.classList[0] === 'num' && input.value == result) {
         const a = e.target.innerText;
         input.value += a;
      }  else if (e.target.classList[0] === 'num' && input.value !== result) {
         const a = e.target.innerText;
         input.value += a;
      } else if (e.target.classList[0] === 'symbol') { 
         a = input.value;
         input.value = "";
      } else if (e.target.classList[0] === 'equally') { 
         b = input.value;
         let num1 = Number(a);
         let num2 = Number(b);
         switch (op) {
            case '+':
               result = num1 + num2;
               break;
            case '-':
               result = num1 - num2;
               break;
            case '*':
               result = num1 * num2;
               break;
            case '/':
               result = num1 / num2;
               break;
            }
            let resultToString = result.toString();
            console.log(resultToString)
            if (resultToString === "Infinity" || resultToString === "-Infinity") {
               resultToString = "Ошибка";
            }
         input.value = resultToString;
      } else if (e.target.classList[0] === 'symbolAC') {
         input.value = "";
      }
   }
   )
   
   function move (value) {
      bitrex.style['width']  = `${value}px`;
      const percent = inputRangeSite.value / (1280) * 100;
      inputRangeSite.style.background = `linear-gradient(to right, rgba(255, 0, 0, 0.5) 0%, rgba(15, 210, 241, 1) ${percent}%, rgba(15, 210, 241, 1) ${percent}%, rgba(255, 0, 0, 0.5) 100%)`
      inputValue(value)
   }

   inputRangeSite.addEventListener("input", function  () {
      let a = Number(inputRangeSite.value)
      const value = a + 320;
      move(value)
   })

function inputValue (a) {
   const size = document.querySelector('#valueSize')
   size.value = a;
}

inputValue (960)


// // Game snake  

// var keys = {};
// window.addEventListener("keydown",
//       function(e){
//          keys[e.keyCode] = true;
//          switch(e.keyCode){
//             case 37: case 39: case 38:  case 40: 
//             case 32: e.preventDefault(); break; 
//             default: break; 
//          }
//       },
// false);
// window.addEventListener('keyup',
//       function(e){
//          keys[e.keyCode] = false;
//       },
// false);

// const snake = document.querySelector('#snake');
// const ctx = snake.getContext("2d");

// const ground = new Image();
// ground.src = "games/snake/image/ground.png";

// const foodImg = new Image();
// foodImg.src = "games/snake/image/food.png";

// let box = 32;

// let score = 0;

// let food = {
//    x: Math.floor((Math.random() * 17 + 1)) * box, 
//    y: Math.floor((Math.random() * 15 + 3)) * box, 
// };

// let snakeBody = [];
// snakeBody[0] = {
//    x: 9 * box,
//    y: 10 * box,
// };

// document.addEventListener("keydown", direction);

// let dir;

// function direction(e) {
//    if(e.keyCode == 37 && dir != 'right') {
//       dir="left";
//    }
//    else if(e.keyCode == 38 && dir != 'down') {
//       dir="up";
//    }
//    else if(e.keyCode == 39 && dir != 'left') {
//       dir="right";
//    }
//    else if(e.keyCode == 40 && dir != 'up') {
//       dir="down";
//    }
// }

// function eatTeil (head, snakeBody) {
//    for (let i = 0; i < snakeBody.length; i++){
//       if (head.x == snakeBody[i].x && head.y == snakeBody[i].y)
//       clearInterval(game);
//    }
// }

// function drawGame() {
//    ctx.drawImage(ground,0,0);

//    ctx.drawImage(foodImg, food.x, food.y);

//    for(let i = 0; i < snakeBody.length; i++) {
//       ctx.fillStyle = i === 0 ? "green": "red";
//       ctx.fillRect(snakeBody[i].x, snakeBody[i].y, box, box);
//    }

//    ctx.fillStyle = "white";
//    ctx.font = "50px Arial";
//    ctx.fillText(score, box*2.5, box*1.7)

//    let snakeX = snakeBody[0].x;
//    let snakeY = snakeBody[0].y;

   

//    if (snakeX == food.x && snakeY == food.y) {
//       score++;
//       food = {
//          x: Math.floor((Math.random() * 17 + 1)) * box, 
//          y: Math.floor((Math.random() * 15 + 3)) * box, 
//       };
//    } else {
//       snakeBody.pop();
//    }

//    if (snakeX < box || snakeX > box*17 || snakeY < 3 * box || snakeY > box * 17) {
//       clearInterval(game);
//    }

//    if(dir == "left") snakeX -= box;
//    if(dir == "right") snakeX += box;
//    if(dir == "up") snakeY -= box;
//    if(dir == "down") snakeY += box;

//    let newHead = {
//       x: snakeX,
//       y: snakeY
//    };

//    eatTeil(newHead, snakeBody);
   
//    snakeBody.unshift(newHead);

// }

// let game = setInterval(drawGame, 100);
