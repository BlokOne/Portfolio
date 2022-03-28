

const slides = [
   {
      img: '/img/1.jpg',
   },
   {
      img: '/img/2.jpg',
   },
   {
      img: '/img/3.jpg',
   }
]
class Slider {
   constructor(slides, id, loop, navs, page, auto, delay) {
      this.slides = slides;
      this.id = id;
      this.loop = loop;
      this.navs = navs;
      this.page = page;
      this.auto = auto;
      this.delay = delay;
   }

   createHtml() {
      const wrapSlider = document.createElement('div');
      wrapSlider.classList.add('slider__wrapper');
      const wrapSlides = document.createElement('div');
      wrapSlides.classList.add('slider__slides');
      const btnNext = document.createElement('div');
      btnNext.classList.add('slider__btn-next');
      const btnPrev = document.createElement('div');
      btnPrev.classList.add('slider__btn-prev');
      const dots = document.createElement('div');
      dots.classList.add('slider__dots');
      slides.forEach((element,index) => {
         const slide = document.createElement('div');
         slide.classList.add('slider__slide');
         const img = document.createElement('img');
         img.src = element.img;
         slide.append(img);
         wrapSlides.append(slide)
         const dot = document.createElement('span');
         dot.classList.add('slider__dot');
         dots.append(dot);
         if(index === 0) {
            slide.classList.add('active');
            dot.classList.add('active-dot');
         }
      });
      wrapSlides.append(btnPrev)
      wrapSlides.append(btnNext)
      wrapSlider.append(wrapSlides);
      wrapSlider.append(dots)
      document.querySelector(`#${this.id}`).append(wrapSlider)
      this.nextBtn = document.querySelector('.slider__btn-next');
      this.prevBtn = document.querySelector('.slider__btn-prev')
      this.slides = document.querySelectorAll('.slider__slide');
      this.dots = document.querySelectorAll('.slider__dot');
      this.wrapSlides = document.querySelector('.slider__slides');
      this.timerId;
      this.addListeners();
   };


   prepareCurrentSlide() {
      this.slides.forEach((element, index) => {
         element.classList.remove('active')
         this.dots[index].classList.remove("active-dot")
      });
      this.dots[this.page].classList.add("active-dot");
      this.slides[this.page].classList.add("active")
   }  

   nextSlide() { 
      if(this.page < this.slides.length - 1) {
         this.page++;
         this.prepareCurrentSlide()
      }
      else if (this.loop) {
         this.page = 0;
         this.prepareCurrentSlide()
      }
   }

   prevSlide() {
      if(this.page > 0 && this.page <= this.slides.length - 1){
         this.page --;
         console.log(this.page)
         this.prepareCurrentSlide()
      }
      else if (this.loop){
         this.page = this.slides.length -1;
         this.prepareCurrentSlide()
      }
   }

   addListeners() {
      this.nextBtn.addEventListener('click', () => {
         this.nextSlide();
      });
      this.prevBtn.addEventListener('click', () => {
         this.prevSlide();
      });

      this.dots.forEach((element,index) => {
         element.addEventListener('click', () => {
            this.page = index;
            this.prepareCurrentSlide()
         })
      });
   }
   

   autoLoop() {
      if (this.delay){
         this.timerId = setInterval(() => {
            this.nextSlide();
         }, this.delay);
      } 
      else {
         this.timerId = setInterval(() => {
            this.nextSlide();
         }, 5000);
      }
   }

   stopAuto () {
      this.wrapSlides.addEventListener('mouseover', () => {
         clearInterval(this.timerId);
      })
      this.wrapSlides.addEventListener('mouseout', () => {
         this.autoLoop();
      })
   }
   
   init() {
      this.createHtml();
      if (this.auto) { 
         this.autoLoop();
         this.stopAuto();
      }
   }

}



const slider = new Slider(
   slides,
   "slider",
   true,
   "navs",
   0,
   true,
   500
);







