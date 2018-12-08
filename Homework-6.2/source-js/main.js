/* Homework 6.2: Tagging */

var parent = document.getElementsByClassName("container")[0];

var nowNumberElem;

parent.onclick = function (e) {

  /* coordinate for main parent element */
  var parElemMov = document.getElementById('element-tagging-container-wrap');
  function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
      right: box.left + pageXOffset + elem.offsetWidth,
      bottom: box.top + pageYOffset + elem.offsetHeight,
    };

  };

  getCoords(parElemMov);

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

    function getCoordsForMove(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

    var coords = getCoordsForMove(meElement);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    //dynamically assigning the read coordinates of the mouse to the element for which the mouse was clicked and displaced relative to this element
    function moveAt(e) {

      meElement.style.left = e.pageX - shiftX + 'px';
      meElement.style.top = e.pageY - 4 - shiftY + 'px';

      /* determine the coordinates of the movable element for further comparison with the coordinates of the parent element */

      function getCoordsElementsFunction(elem) {
        var box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          right: box.left + elem.offsetWidth,
          bottom: box.top + elem.offsetHeight,
          left: box.left,
        };
      }
      var coordsMyElem = getCoordsElementsFunction(meElement);

      /* comparing the coordinates of the moving and parenting element */
      if ((coordsMyElem.bottom >= getCoords(parElemMov).bottom) || (getCoords(parElemMov).top >= coordsMyElem.top) || (getCoords(parElemMov).left >= coordsMyElem.left) || (coordsMyElem.right >= getCoords(parElemMov).right)) {
        document.onmousemove = null;
      }

    }

    //move the mouse and element at the same time
    document.onmousemove = function(e) {
      moveAt(e);
    };

    // conditions for ending dragging an element

    meElement.onmouseup = function() {
      document.onmousemove = null;
    }

    /* exit from dragging when clicking on the parent element */
    var clickForQwuit = document.getElementById('element-tagging-container-wrap');

    clickForQwuit.onclick = function (e) {
      document.onmousemove = null;
    }

  }

};

