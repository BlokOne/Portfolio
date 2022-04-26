const oldMobile = document.querySelector('.mobile'),
newMobile = document.querySelector('.big-mobile'),
tablet = document.querySelector('.tablet'),
desctop = document.querySelector('.desctop');
const point = document.querySelectorAll('.device')
console.log(Array.from(point))
let zSpacing = -1000,
   lastPost = zSpacing / 5,
   elements = document.getElementsByClassName('frame'),
   frames = Array.from(elements),
   zVals = [];

window.onscroll = function () {
   let top = document.documentElement.scrollTop,
      delta = lastPost - top;
   lastPost = top;
   console.log(top)

   frames.forEach(function(n, i ){
      zVals.push((i * zSpacing)+ zSpacing);
      zVals[i] += delta * -6;
      let frame = frames[i],
         transform = `translateZ(${zVals[i]}px)`
         opacity = zVals[i] < Math.abs(zSpacing)/1.1 ? 1 : 0
      frame.setAttribute('style', `transform:${transform}; opacity:${opacity}`)
   });

   if (top < 1400 && top > 0) {
      document.querySelector('.first-screen').classList.remove('active')
      document.querySelector('.site-body').classList.remove('active')
      document.querySelector('.body').classList.remove('active')
      console.log('ho')
   } else if( top < 1500 && top > 1400)  {
      document.querySelector('.body').classList.add('active')
      document.querySelector('.first-screen').classList.add('active')
      document.querySelector('.site-body').classList.add('active')
   } else if (top < 1700 && top > 1500 ){
      Array.from(point).forEach(a => {
      a.classList.add('mobile');
      a.classList.remove('tablet');
      a.classList.remove('mobile-big');
      a.classList.remove('desktop');
      })
   } else if (top < 1900 && top > 1700 ){
      Array.from(point).forEach(a => {
         a.classList.add('mobile-big');
         a.classList.remove('tablet');
         a.classList.remove('mobile');
         a.classList.remove('desktop');
      })
   }  else if (top < 2100 && top > 1900  ){ 
      Array.from(point).forEach(a => {
         a.classList.add('tablet');
         a.classList.remove('mobile');
         a.classList.remove('mobile-big');
         a.classList.remove('desktop');

      })
   } else if (top < 2300 && top > 2100 ){
      Array.from(point).forEach(a => {
         a.classList.add('desktop');
         a.classList.remove('tablet');
         a.classList.remove('mobile-big');
         a.classList.remove('mobile');

      })
   }
}
window.scrollTo(0,2)


