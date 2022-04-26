let zSpacing = -1000,
   lastPost = zSpacing / 5,
   elements = document.getElementsByClassName('frame'),
   frames = Array.from(elements),
   zVals = [];

window.onscroll = function () {
   let top = document.documentElement.scrollTop,
      delta = lastPost - top;
   lastPost = top;

   frames.forEach(function(n, i ){
      zVals.push((i * zSpacing)+ zSpacing);
      zVals[i] += delta * -6;
      let frame = frames[i],
         transform = `translateZ(${zVals[i]}px)`
         opacity = zVals[i] < Math.abs(zSpacing)/1.1 ? 1 : 0
      frame.setAttribute('style', `transform:${transform}; opacity:${opacity}`)
   });

   if (top > 1400) {
      document.querySelector('.body').classList.add('active')
      document.querySelector('.first-screen').classList.add('active')
      document.querySelector('.site-body').classList.add('active')
   } else {
      document.querySelector('.first-screen').classList.remove('active')
      document.querySelector('.site-body').classList.remove('active')
      document.querySelector('.body').classList.remove('active')
   }
}
window.scrollTo(0,2)


