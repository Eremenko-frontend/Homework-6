/* Homework 6: Slider */

/* Для зберігання номеру показаного поточного слайду */

var nowSlide = 0;

/* При клікі на клавішу "Prev" */
var slideAll = document.getElementsByClassName('my-slider__on-item');//для визначення дожвини (кількості) слайдів

function funcraAddClass (allSlide, nowSlide, slideAll) {

  if (0 < nowSlide && nowSlide < (slideAll.length - 1)) {
    allSlide[nowSlide + 1].classList.add("my-slider__on-item--next");
    allSlide[nowSlide - 1].classList.add("my-slider__on-item--prev");
  } else if (0 == nowSlide) {
    allSlide[nowSlide + 1].classList.add("my-slider__on-item--next");
    allSlide[slideAll.length - 1].classList.add("my-slider__on-item--prev");
  } else if (nowSlide == (slideAll.length - 1)) {
    allSlide[0].classList.add("my-slider__on-item--next");
    allSlide[nowSlide - 1].classList.add("my-slider__on-item--prev");
  }

};

function funcrRemoveClass (allSlide) {
  for (var i = 0; i < allSlide.length; i++) {//the loop is designed to crawl the resulting array
    allSlide[i].classList.remove("my-slider__on-item--prev");
    allSlide[i].classList.remove("my-slider__on-item--show");
    allSlide[i].classList.remove("my-slider__on-item--next");
  }
};






var prevItemB = document.getElementById('my-slider__prev-slide');

prevItemB.onclick = function () {

  var allSlide = document.getElementsByClassName('my-slider__on-item');

  funcrRemoveClass(allSlide);

  if (nowSlide <= 0) {
    nowSlide = slideAll.length;
  }

  nowSlide = nowSlide - 1;

  allSlide[nowSlide].classList.add("my-slider__on-item--show");

  funcraAddClass(allSlide, nowSlide, slideAll);

  return nowSlide;

};















/* При клікі на клавішу "Next" */
var nextItemB = document.getElementById('my-slider__next-slide');

nextItemB.onclick = function () {

  var allSlide = document.getElementsByClassName('my-slider__on-item');

  funcrRemoveClass(allSlide);

  nowSlide = nowSlide + 1;

  if (nowSlide > (slideAll.length -1)) {
    nowSlide = 0;
  }

  allSlide[nowSlide].classList.add("my-slider__on-item--show");

  funcraAddClass(allSlide, nowSlide, slideAll);

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

      funcrRemoveClass(allSlide);

      allSlide[nowSlide].classList.add("my-slider__on-item--show");

      funcraAddClass(allSlide, nowSlide, slideAll);

      return nowSlide;

    };

  }

};


