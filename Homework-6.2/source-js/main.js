/* Homework 6.2: Tagging */

var parent = document.getElementsByClassName("container")[0];

var nowNumberElem;

parent.onclick = function (e) {

  //define the date-attribute which will be the serial number in the array
  nowNumberElem = e.toElement.parentElement.dataset.number;

  //delete all classes element-tagging
  var elem = document.getElementsByClassName("element-tagging");

  for (var p = 0; p < elem.length; p++) {//the loop is designed to crawl the resulting array
    elem[p].classList.remove('element-tagging__open');
  }

  //add the class "element-tagging__open" of the element on which the click was made
  elem[nowNumberElem].classList.add("element-tagging__open");

  var meElement =  elem[nowNumberElem];

  //mouse click event
  meElement.onmousedown = function(e) {

    //add the inlay style of the element on which the click was made
    meElement.style.position = 'absolute';
    moveAt(e);

    //positioning element over others
    meElement.style.zIndex = 1;

    //dynamically assigning the read coordinates of the mouse to the element for which the mouse was clicked and displaced relative to this element
    function moveAt(e) {
      meElement.style.left = e.pageX - meElement.offsetWidth / 2 + 'px';
      meElement.style.top = e.pageY - meElement.offsetHeight / 1.5 + 'px';
    }

    //move the mouse and element at the same time
    document.onmousemove = function(e) {
      moveAt(e);
    }

    // conditions for ending dragging an element
    meElement.onmouseup = function() {
      document.onmousemove = null;
    }

  }

};


