var nowNumberElem,parent=document.getElementsByClassName("container")[0];parent.onclick=function(e){function t(e){var t=e.getBoundingClientRect();return{top:t.top+pageYOffset,left:t.left+pageXOffset,right:t.left+pageXOffset+e.offsetWidth,bottom:t.top+pageYOffset+e.offsetHeight}}var n=document.getElementById("element-tagging-container-wrap");t(n),nowNumberElem=e.toElement.parentElement.dataset.number;for(var o=document.getElementsByClassName("element-tagging"),l=0;l<o.length;l++)o[l].classList.remove("element-tagging__open");o[nowNumberElem].classList.add("element-tagging__open");var m=o[nowNumberElem];m.onmousedown=function(e){function o(e){m.style.left=e.pageX-f+"px",m.style.top=e.pageY-4-a+"px";var o=function(e){var t=e.getBoundingClientRect();return{top:t.top+pageYOffset,right:t.left+e.offsetWidth,bottom:t.top+e.offsetHeight,left:t.left}}(m);(o.bottom>=t(n).bottom||t(n).top>=o.top||t(n).left>=o.left||o.right>=t(n).right)&&(document.onmousemove=null)}m.style.position="absolute",o(e),m.style.zIndex=1;var l=function(e){var t=e.getBoundingClientRect();return{top:t.top+pageYOffset,left:t.left+pageXOffset}}(m),f=e.pageX-l.left,a=e.pageY-l.top;document.onmousemove=function(e){o(e)},m.onmouseup=function(){document.onmousemove=null};document.getElementById("element-tagging-container-wrap").onclick=function(e){document.onmousemove=null}}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1lRWxlbWVudCIsInBvc2l0aW9uIiwiZSIsIm9ubW91c2V1cCIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0IiwibGVmdCIsInBhZ2VYT2Zmc2V0IiwicmlnaHQiLCJvZmZzZXRXaWR0aCIsImJvdHRvbSIsIm9mZnNldEhlaWdodCIsIm9ubW91c2Vtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb29yZHMiLCJwYXJFbGVtTW92Iiwibm93TnVtYmVyRWxlbSIsInRvRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJkYXRhc2V0IiwibnVtYmVyIiwicCIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9ubW91c2Vkb3duIiwibW92ZUF0Iiwic3R5bGUiLCJwYWdlWCIsInNoaWZ0WCIsInBhZ2VZIiwic2hpZnRZIiwiY29vcmRzTXlFbGVtIiwiZ2V0Q29vcmRzRWxlbWVudHNGdW5jdGlvbiIsInpJbmRleCIsImNvb3JkcyIsImdldENvb3Jkc0Zvck1vdmUiLCJvbmNsaWNrIl0sIm1hcHBpbmdzIjoiQUE0QkUsSUFPQUEsY0FQSUEsT0FBT0MsU0FBU0MsdUJBQXVCLGFBQWhDLEdBZVRDLE9BQUFBLFFBQWdCQyxTQUFXQyxHQW1EM0JGLFNBQVVHLEVBQVlOLEdBbkZ0QixJQUFJTyxFQUFNUCxFQUFLUSx3QkFFZixPQUNFQyxJQUFLRixFQUFJRSxJQUFNQyxZQUNmQyxLQUFNSixFQUFJSSxLQUFPQyxZQUNqQkMsTUFBT04sRUFBSUksS0FBT0MsWUFBY1osRUFBS2MsWUFDckNDLE9BQVFSLEVBQUlFLElBQU1DLFlBQWNWLEVBQUtnQixjQXVFdkNmLElBQUFBLEVBQVNnQixTQUFjQyxlQUV0QixrQ0FwRUhDLEVBQVVDLEdBR1ZDLGNBQWdCaEIsRUFBRWlCLFVBQVVDLGNBQWNDLFFBQVFDLE9BS2xELElBQUssSUFGRHpCLEVBQU9DLFNBQVNDLHVCQUF1QixtQkFFbEN3QixFQUFJLEVBQUdBLEVBQUkxQixFQUFLMkIsT0FBUUQsSUFDL0IxQixFQUFLMEIsR0FBR0UsVUFBVUMsT0FBTyx5QkFJM0I3QixFQUFLcUIsZUFBZU8sVUFBVUUsSUFBSSx5QkFFbEMsSUFBSTNCLEVBQWFILEVBQUtxQixlQUd0QmxCLEVBQVU0QixZQUFjLFNBQVMxQixHQXNCL0IsU0FBUzJCLEVBQU8zQixHQUVkRixFQUFVOEIsTUFBTXRCLEtBQU9OLEVBQUU2QixNQUFRQyxFQUFTLEtBQzFDaEMsRUFBVThCLE1BQU14QixJQUFNSixFQUFFK0IsTUFBUSxFQUFJQyxFQUFTLEtBYTdDLElBQUlDLEVBVEosU0FBbUN0QyxHQUNqQyxJQUFJTyxFQUFNUCxFQUFLUSx3QkFDZixPQUNFQyxJQUFLRixFQUFJRSxJQUFNQyxZQUNmRyxNQUFPTixFQUFJSSxLQUFPWCxFQUFLYyxZQUN2QkMsT0FBUVIsRUFBSUUsSUFBTVQsRUFBS2dCLGFBQ3ZCTCxLQUFNSixFQUFJSSxNQUdLNEIsQ0FBMEJwQyxJQUd4Q21DLEVBQWF2QixRQUFVSSxFQUFVQyxHQUFZTCxRQUFZSSxFQUFVQyxHQUFZWCxLQUFPNkIsRUFBYTdCLEtBQVNVLEVBQVVDLEdBQVlULE1BQVEyQixFQUFhM0IsTUFBVTJCLEVBQWF6QixPQUFTTSxFQUFVQyxHQUFZUCxTQUNoTlosU0FBU2dCLFlBQWMsTUF2QzNCZCxFQUFVOEIsTUFBTTdCLFNBQVcsV0FDM0I0QixFQUFPM0IsR0FHUEYsRUFBVThCLE1BQU1PLE9BQVMsRUFVekIsSUFBSUMsRUFSSixTQUEwQnpDLEdBQ3hCLElBQUlPLEVBQU1QLEVBQUtRLHdCQUNmLE9BQ0VDLElBQUtGLEVBQUlFLElBQU1DLFlBQ2ZDLEtBQU1KLEVBQUlJLEtBQU9DLGFBSVI4QixDQUFpQnZDLEdBQzFCZ0MsRUFBUzlCLEVBQUU2QixNQUFRTyxFQUFPOUIsS0FDMUIwQixFQUFTaEMsRUFBRStCLE1BQVFLLEVBQU9oQyxJQTZCOUJSLFNBQVNnQixZQUFjLFNBQVNaLEdBQzlCMkIsRUFBTzNCLElBS1RGLEVBQVVHLFVBQVksV0FDcEJMLFNBQVNnQixZQUFjLE1BSUxoQixTQUFTaUIsZUFBZSxrQ0FFOUJ5QixRQUFVLFNBQVV0QyxHQUNoQ0osU0FBU2dCLFlBQWMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhvbWV3b3JrIDYuMjogVGFnZ2luZyAqL1xuXG52YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVswXTtcblxudmFyIG5vd051bWJlckVsZW07XG5cbnBhcmVudC5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcblxuICAvKiBjb29yZGluYXRlIGZvciBtYWluIHBhcmVudCBlbGVtZW50ICovXG4gIHZhciBwYXJFbGVtTW92ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsZW1lbnQtdGFnZ2luZy1jb250YWluZXItd3JhcCcpO1xuICBmdW5jdGlvbiBnZXRDb29yZHMoZWxlbSkge1xuICAgIHZhciBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYm94LnRvcCArIHBhZ2VZT2Zmc2V0LFxuICAgICAgbGVmdDogYm94LmxlZnQgKyBwYWdlWE9mZnNldCxcbiAgICAgIHJpZ2h0OiBib3gubGVmdCArIHBhZ2VYT2Zmc2V0ICsgZWxlbS5vZmZzZXRXaWR0aCxcbiAgICAgIGJvdHRvbTogYm94LnRvcCArIHBhZ2VZT2Zmc2V0ICsgZWxlbS5vZmZzZXRIZWlnaHQsXG4gICAgfTtcblxuICB9O1xuXG4gIGdldENvb3JkcyhwYXJFbGVtTW92KTtcblxuICAvL2RlZmluZSB0aGUgZGF0ZS1hdHRyaWJ1dGUgd2hpY2ggd2lsbCBiZSB0aGUgc2VyaWFsIG51bWJlciBpbiB0aGUgYXJyYXlcbiAgbm93TnVtYmVyRWxlbSA9IGUudG9FbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5udW1iZXI7XG5cbiAgLy9kZWxldGUgYWxsIGNsYXNzZXMgZWxlbWVudC10YWdnaW5nXG4gIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVsZW1lbnQtdGFnZ2luZ1wiKTtcblxuICBmb3IgKHZhciBwID0gMDsgcCA8IGVsZW0ubGVuZ3RoOyBwKyspIHsvL3RoZSBsb29wIGlzIGRlc2lnbmVkIHRvIGNyYXdsIHRoZSByZXN1bHRpbmcgYXJyYXlcbiAgICBlbGVtW3BdLmNsYXNzTGlzdC5yZW1vdmUoJ2VsZW1lbnQtdGFnZ2luZ19fb3BlbicpO1xuICB9XG5cbiAgLy9hZGQgdGhlIGNsYXNzIFwiZWxlbWVudC10YWdnaW5nX19vcGVuXCIgb2YgdGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIGNsaWNrIHdhcyBtYWRlXG4gIGVsZW1bbm93TnVtYmVyRWxlbV0uY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtdGFnZ2luZ19fb3BlblwiKTtcblxuICB2YXIgbWVFbGVtZW50ID0gIGVsZW1bbm93TnVtYmVyRWxlbV07XG5cbiAgLy9tb3VzZSBjbGljayBldmVudFxuICBtZUVsZW1lbnQub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKSB7XG5cbiAgICAvL2FkZCB0aGUgaW5sYXkgc3R5bGUgb2YgdGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIGNsaWNrIHdhcyBtYWRlXG4gICAgbWVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBtb3ZlQXQoZSk7XG5cbiAgICAvL3Bvc2l0aW9uaW5nIGVsZW1lbnQgb3ZlciBvdGhlcnNcbiAgICBtZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTtcblxuICAgIGZ1bmN0aW9uIGdldENvb3Jkc0Zvck1vdmUoZWxlbSkge1xuICAgICAgdmFyIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IGJveC50b3AgKyBwYWdlWU9mZnNldCxcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyBwYWdlWE9mZnNldFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgY29vcmRzID0gZ2V0Q29vcmRzRm9yTW92ZShtZUVsZW1lbnQpO1xuICAgIHZhciBzaGlmdFggPSBlLnBhZ2VYIC0gY29vcmRzLmxlZnQ7XG4gICAgdmFyIHNoaWZ0WSA9IGUucGFnZVkgLSBjb29yZHMudG9wO1xuXG4gICAgLy9keW5hbWljYWxseSBhc3NpZ25pbmcgdGhlIHJlYWQgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIHRvIHRoZSBlbGVtZW50IGZvciB3aGljaCB0aGUgbW91c2Ugd2FzIGNsaWNrZWQgYW5kIGRpc3BsYWNlZCByZWxhdGl2ZSB0byB0aGlzIGVsZW1lbnRcbiAgICBmdW5jdGlvbiBtb3ZlQXQoZSkge1xuXG4gICAgICBtZUVsZW1lbnQuc3R5bGUubGVmdCA9IGUucGFnZVggLSBzaGlmdFggKyAncHgnO1xuICAgICAgbWVFbGVtZW50LnN0eWxlLnRvcCA9IGUucGFnZVkgLSA0IC0gc2hpZnRZICsgJ3B4JztcblxuICAgICAgLyogZGV0ZXJtaW5lIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbW92YWJsZSBlbGVtZW50IGZvciBmdXJ0aGVyIGNvbXBhcmlzb24gd2l0aCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBhcmVudCBlbGVtZW50ICovXG5cbiAgICAgIGZ1bmN0aW9uIGdldENvb3Jkc0VsZW1lbnRzRnVuY3Rpb24oZWxlbSkge1xuICAgICAgICB2YXIgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IGJveC50b3AgKyBwYWdlWU9mZnNldCxcbiAgICAgICAgICByaWdodDogYm94LmxlZnQgKyBlbGVtLm9mZnNldFdpZHRoLFxuICAgICAgICAgIGJvdHRvbTogYm94LnRvcCArIGVsZW0ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IGJveC5sZWZ0LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIGNvb3Jkc015RWxlbSA9IGdldENvb3Jkc0VsZW1lbnRzRnVuY3Rpb24obWVFbGVtZW50KTtcblxuICAgICAgLyogY29tcGFyaW5nIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbW92aW5nIGFuZCBwYXJlbnRpbmcgZWxlbWVudCAqL1xuICAgICAgaWYgKChjb29yZHNNeUVsZW0uYm90dG9tID49IGdldENvb3JkcyhwYXJFbGVtTW92KS5ib3R0b20pIHx8IChnZXRDb29yZHMocGFyRWxlbU1vdikudG9wID49IGNvb3Jkc015RWxlbS50b3ApIHx8IChnZXRDb29yZHMocGFyRWxlbU1vdikubGVmdCA+PSBjb29yZHNNeUVsZW0ubGVmdCkgfHwgKGNvb3Jkc015RWxlbS5yaWdodCA+PSBnZXRDb29yZHMocGFyRWxlbU1vdikucmlnaHQpKSB7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vbW92ZSB0aGUgbW91c2UgYW5kIGVsZW1lbnQgYXQgdGhlIHNhbWUgdGltZVxuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgbW92ZUF0KGUpO1xuICAgIH07XG5cbiAgICAvLyBjb25kaXRpb25zIGZvciBlbmRpbmcgZHJhZ2dpbmcgYW4gZWxlbWVudFxuXG4gICAgbWVFbGVtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgIH1cblxuICAgIC8qIGV4aXQgZnJvbSBkcmFnZ2luZyB3aGVuIGNsaWNraW5nIG9uIHRoZSBwYXJlbnQgZWxlbWVudCAqL1xuICAgIHZhciBjbGlja0ZvclF3dWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsZW1lbnQtdGFnZ2luZy1jb250YWluZXItd3JhcCcpO1xuXG4gICAgY2xpY2tGb3JRd3VpdC5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG59O1xuXG4iXX0=
