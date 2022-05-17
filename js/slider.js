const oldMobile = document.querySelector(".mobile"),
   newMobile = document.querySelector(".big-mobile"),
   tablet = document.querySelector(".tablet"),
   desctop = document.querySelector(".desctop");
const point = document.querySelectorAll(".device");
const skill = document.querySelectorAll(".frame__item");

let load = true;

setTimeout(()=>{
   load = false;

},100)


let zSpacing = -500,
   lastPost = zSpacing / 5,
   elements = document.getElementsByClassName("frame"),
   frames = Array.from(elements),
   zVals = [],
   skills = Array.from(skill);
   
function moveSkills(a) {
   for (i = 0; i < a.length; i++) {
      moveSkill(i);
   }
}

function moveSkill(i) {
   setTimeout(() => {
      skills[i].classList.add("active");
   }, 200 * i);
}

window.onscroll = function () {

   let top = document.documentElement.scrollTop,
   delta = lastPost - top;
   lastPost = top;

  window.addEventListener('unload', function(){
   window.scrollTo(0,1);
  })

 
   

   frames.forEach(function (n, i) {
      zVals.push(i * zSpacing + zSpacing);
      zVals[i] += delta * -7;
      let frame = frames[i],
         transform = `translateZ(${zVals[i]}px)`;
      opacity = zVals[i] < Math.abs(zSpacing) / 1.1 ? 1 : 0;
      frame.setAttribute("style", `transform:${transform}; opacity:${opacity}`);
   });

   if (top > 399 && top < 500) {
      moveSkills(skills);
   } else if (350 > top && top < 290) {
      skills.forEach((a) => {
         a.classList.remove("active");
      });
   } else if (top < 700 && top > 0) {
      document.querySelector(".first-screen").classList.remove("active");
      document.querySelector(".site-body").classList.remove("active");
      document.querySelector(".body").classList.remove("active");
   } else if (top < 800 && top > 700) {
      document.querySelector(".body").classList.add("active");
      document.querySelector(".first-screen").classList.add("active");
      document.querySelector(".site-body").classList.add("active");
      Array.from(point).forEach((a) => {
         a.classList.add("mobile");
         a.classList.remove("tablet");
         a.classList.remove("mobile-big");
         a.classList.remove("desktop");
      });
   } else if (top < 1000 && top > 900) {
      Array.from(point).forEach((a) => {
         a.classList.add("mobile-big");
         a.classList.remove("tablet");
         a.classList.remove("mobile");
         a.classList.remove("desktop");
      });
   } else if (top < 1200 && top > 1100) {
      Array.from(point).forEach((a) => {
         a.classList.add("tablet");
         a.classList.remove("mobile");
         a.classList.remove("mobile-big");
         a.classList.remove("desktop");
      });
   } else if (top < 1400 && top > 1300) {
      Array.from(point).forEach((a) => {
         a.classList.add("desktop");
         a.classList.remove("tablet");
         a.classList.remove("mobile-big");
         a.classList.remove("mobile");
      });
      document.querySelector(".site-body").classList.remove("unactive");
      document.querySelector(".app").classList.remove("active");
   } else if (top < 1700 && top > 1500) {
      document.querySelector(".site-body").classList.add("unactive");
      document.querySelector(".app").classList.add("active");
      document
         .querySelector(".app__weather-wrapper")
         .classList.remove("active");
   } else if (top < 1900 && top > 1700) {
      document.querySelector(".app__weather-wrapper").classList.add("active"),
         document
            .querySelector(".app__weather-wrapper")
            .addEventListener("click", () => {
               document
                  .querySelector(".app__weather-wrapper")
                  .classList.remove("active");
               console.log("hi");
            });
      document.querySelector(".cube").classList.remove("active");
   } else if (top < 2100 && top > 1900) {
      document
         .querySelector(".app__weather-wrapper")
         .classList.remove("active");
      document.querySelector(".cube").classList.add("active");
      document
         .querySelector(".app__calculator-wrapper")
         .classList.remove("active");
   } else if (top < 2300 && top > 2100) {
      document
         .querySelector(".app__calculator-wrapper")
         .classList.add("active");
      document.querySelector('selector')
      document.querySelector(".app").classList.add("active");
      document.querySelector('.game').classList.remove('active');
   } else if (top < 2500 && top > 2300) {
      document.querySelector(".app").classList.remove("active");
      document.querySelector('.game').classList.add('active');
      document.querySelector('.footer').classList.remove('active');
   } else if (top < 2700 && top > 2500) {
      document.querySelector('.footer').classList.add('active');
      document.querySelector('.game').classList.remove('active');
   }

};



window.scrollTo(0,2);