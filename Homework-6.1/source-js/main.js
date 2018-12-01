/* Homework 6: Slider */

/* Для зберігання номеру показаного поточного слайду */

var nowSlide = 0;

/* При клікі на клавішу "Prev" */
var slideAll = document.getElementsByClassName('my-slider__on-item');//для визначення дожвини (кількості) слайдів








var prevItemB = document.getElementById('my-slider__prev-slide');

prevItemB.onclick = function () {

  var allSlide = document.getElementsByClassName('my-slider__on-item');

  for (var i = 0; i < allSlide.length; i++) {//the loop is designed to crawl the resulting array
    allSlide[i].classList.remove("my-slider__on-item--show");
  }

  if (nowSlide <= 0) {
    nowSlide = slideAll.length;
  }

  nowSlide = nowSlide - 1;

 // console.log(nowSlide);

  allSlide[nowSlide].classList.add("my-slider__on-item--show");
  return nowSlide;
};















/* При клікі на клавішу "Next" */
var nextItemB = document.getElementById('my-slider__next-slide');

nextItemB.onclick = function () {

  var allSlide = document.getElementsByClassName('my-slider__on-item');

  for (var i = 0; i < allSlide.length; i++) {//the loop is designed to crawl the resulting array
    allSlide[i].classList.remove("my-slider__on-item--show");
  }

  if (nowSlide > slideAll.length) {
    nowSlide = 0;
  }

  nowSlide = nowSlide + 1;

   console.log(slideAll.length);

  allSlide[nowSlide].classList.add("my-slider__on-item--show");
  return nowSlide;
};















/* Для спрацювання по кліку на атрибут */







//Визначення номеру по порядку круглої кнопки на яку клікнули

var parent = document.getElementsByClassName("my-slider__all-dots")[0];
parent.onclick = function (e) {
  var e = e || event;
  var target = e.target || e.srcElement;
  for(var i = 0; i < parent.children.length; i++) {
    if(parent.children[i] == target) {
      nowSlide = i;


      var allSlide = document.getElementsByClassName('my-slider__on-item');

      for (var i = 0; i < allSlide.length; i++) {//the loop is designed to crawl the resulting array
        allSlide[i].classList.remove("my-slider__on-item--show");
      }


      allSlide[nowSlide].classList.add("my-slider__on-item--show");

      return nowSlide;


    };







  }
};










/*


var nowNumberDot = nowDotB.getAttribute('data-number');
console.log(nowNumberDot);

*/