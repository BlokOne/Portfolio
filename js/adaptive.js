const oldMobile = document.querySelector('.mobile'),
newMobile = document.querySelector('.big-mobile'),
tablet = document.querySelector('.tablet'),
desctop = document.querySelector('.desctop');

const point = document.querySelectorAll('.device')

oldMobile.addEventListener('click', ()=> {
   Array.from(point).forEach(a => {
      a.classList.add('mobile');
      a.classList.remove('tablet');
      a.classList.remove('mobile-big');
      a.classList.remove('desktop');
   })
})

newMobile.addEventListener('click', ()=>{
   Array.from(point).forEach(a => {
      a.classList.add('mobile-big');
      a.classList.remove('tablet');
      a.classList.remove('mobile');
      a.classList.remove('desktop');
   })
})

tablet.addEventListener('click', ()=> {
   Array.from(point).forEach(a => {
      a.classList.add('tablet');
      a.classList.remove('mobile');
      a.classList.remove('mobile-big');
      a.classList.remove('desktop');
   })
})

desctop.addEventListener('click', ()=>{
   Array.from(point).forEach(a => {
      a.classList.add('desktop');
      a.classList.remove('tablet');
      a.classList.remove('mobile-big');
      a.classList.remove('mobile');
   })
})

// a.classList.add('desktop')
// a.classList.remove('tablet')
// a.classList.remove('mobile-big')
// a.classList.remove('mobile')

