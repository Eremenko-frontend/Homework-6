var nowSlide=0,slideAll=document.getElementsByClassName("my-slider__on-item"),prevItemB=document.getElementById("my-slider__prev-slide");prevItemB.onclick=function(){for(var e=document.getElementsByClassName("my-slider__on-item"),l=0;l<e.length;l++)e[l].classList.remove("my-slider__on-item--show");return nowSlide<=0&&(nowSlide=slideAll.length),nowSlide-=1,e[nowSlide].classList.add("my-slider__on-item--show"),nowSlide};var nextItemB=document.getElementById("my-slider__next-slide");nextItemB.onclick=function(){for(var e=document.getElementsByClassName("my-slider__on-item"),l=0;l<e.length;l++)e[l].classList.remove("my-slider__on-item--show");return nowSlide>slideAll.length&&(nowSlide=0),nowSlide+=1,console.log(slideAll.length),e[nowSlide].classList.add("my-slider__on-item--show"),nowSlide};var parent=document.getElementsByClassName("my-slider__all-dots")[0];parent.onclick=function(e){for(var l=(e=e||event).target||e.srcElement,n=0;n<parent.children.length;n++)if(parent.children[n]==l){nowSlide=n;var t=document.getElementsByClassName("my-slider__on-item");for(n=0;n<t.length;n++)t[n].classList.remove("my-slider__on-item--show");return t[nowSlide].classList.add("my-slider__on-item--show"),nowSlide}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYWxsU2xpZGUiLCJjbGFzc0xpc3QiLCJzbGlkZUFsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByZXZJdGVtQiIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayIsImkiLCJsZW5ndGgiLCJyZW1vdmUiLCJub3dTbGlkZSIsImFkZCIsIm5leHRJdGVtQiIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnQiLCJlIiwidGFyZ2V0IiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQTRESUEsSUFBQUEsU0FBWUMsRUFyRFpDLFNBQVdDLFNBQVNDLHVCQUF1QixzQkFTM0NDLFVBQVlGLFNBQVNHLGVBQWUseUJBRXhDRCxVQUFVRSxRQUFVLFdBSWxCLElBQUssSUFGRFAsRUFBV0csU0FBU0MsdUJBQXVCLHNCQUV0Q0ksRUFBSSxFQUFHQSxFQUFJUixFQUFTUyxPQUFRRCxJQUNuQ1IsRUFBU1EsR0FBR1AsVUFBVVMsT0FBTyw0QkFZL0IsT0FUSUMsVUFBWSxJQUNkQSxTQUFXVCxTQUFTTyxRQUd0QkUsVUFBc0IsRUFJdEJYLEVBQVNXLFVBQVVWLFVBQVVXLElBQUksNEJBQzFCRCxVQWtCVCxJQUFJRSxVQUFZVixTQUFTRyxlQUFlLHlCQUV4Q08sVUFBVU4sUUFBVSxXQUlsQixJQUFLLElBRkRQLEVBQVdHLFNBQVNDLHVCQUF1QixzQkFFdENJLEVBQUksRUFBR0EsRUFBSVIsRUFBU1MsT0FBUUQsSUFDbkNSLEVBQVNRLEdBQUdQLFVBQVVTLE9BQU8sNEJBWS9CLE9BVElDLFNBQVdULFNBQVNPLFNBQ3RCRSxTQUFXLEdBR2JBLFVBQXNCLEVBRXJCRyxRQUFRQyxJQUFJYixTQUFTTyxRQUV0QlQsRUFBU1csVUFBVVYsVUFBVVcsSUFBSSw0QkFDMUJELFVBMkJULElBQUlLLE9BQVNiLFNBQVNDLHVCQUF1Qix1QkFBdUIsR0FDcEVZLE9BQU9ULFFBQVUsU0FBVVUsR0FHekIsSUFBSSxJQURBQyxHQURBRCxFQUFJQSxHQUFLRSxPQUNFRCxRQUFVRCxFQUFFRyxXQUNuQlosRUFBSSxFQUFHQSxFQUFJUSxPQUFPSyxTQUFTWixPQUFRRCxJQUN6QyxHQUFHUSxPQUFPSyxTQUFTYixJQUFNVSxFQUFRLENBQy9CUCxTQUFXSCxFQUtOLElBRkRSLEVBQVdHLFNBQVNDLHVCQUF1QixzQkFFL0MsSUFBU0ksRUFBSSxFQUFHQSxFQUFJUixFQUFTUyxPQUFRRCxJQUNuQ1IsRUFBU1EsR0FBR1AsVUFBVVMsT0FBTyw0QkFNL0IsT0FGQVYsRUFBU1csVUFBVVYsVUFBVVcsSUFBSSw0QkFFMUJEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIb21ld29yayA2OiBTbGlkZXIgKi9cblxuLyog0JTQu9GPINC30LHQtdGA0ZbQs9Cw0L3QvdGPINC90L7QvNC10YDRgyDQv9C+0LrQsNC30LDQvdC+0LPQviDQv9C+0YLQvtGH0L3QvtCz0L4g0YHQu9Cw0LnQtNGDICovXG5cbnZhciBub3dTbGlkZSA9IDA7XG5cbi8qINCf0YDQuCDQutC70ZbQutGWINC90LAg0LrQu9Cw0LLRltGI0YMgXCJQcmV2XCIgKi9cbnZhciBzbGlkZUFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ215LXNsaWRlcl9fb24taXRlbScpOy8v0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPINC00L7QttCy0LjQvdC4ICjQutGW0LvRjNC60L7RgdGC0ZYpINGB0LvQsNC50LTRltCyXG5cblxuXG5cblxuXG5cblxudmFyIHByZXZJdGVtQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1zbGlkZXJfX3ByZXYtc2xpZGUnKTtcblxucHJldkl0ZW1CLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGFsbFNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXktc2xpZGVyX19vbi1pdGVtJyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxTbGlkZS5sZW5ndGg7IGkrKykgey8vdGhlIGxvb3AgaXMgZGVzaWduZWQgdG8gY3Jhd2wgdGhlIHJlc3VsdGluZyBhcnJheVxuICAgIGFsbFNsaWRlW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJteS1zbGlkZXJfX29uLWl0ZW0tLXNob3dcIik7XG4gIH1cblxuICBpZiAobm93U2xpZGUgPD0gMCkge1xuICAgIG5vd1NsaWRlID0gc2xpZGVBbGwubGVuZ3RoO1xuICB9XG5cbiAgbm93U2xpZGUgPSBub3dTbGlkZSAtIDE7XG5cbiAvLyBjb25zb2xlLmxvZyhub3dTbGlkZSk7XG5cbiAgYWxsU2xpZGVbbm93U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJteS1zbGlkZXJfX29uLWl0ZW0tLXNob3dcIik7XG4gIHJldHVybiBub3dTbGlkZTtcbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiDQn9GA0Lgg0LrQu9GW0LrRliDQvdCwINC60LvQsNCy0ZbRiNGDIFwiTmV4dFwiICovXG52YXIgbmV4dEl0ZW1CID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LXNsaWRlcl9fbmV4dC1zbGlkZScpO1xuXG5uZXh0SXRlbUIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgYWxsU2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdteS1zbGlkZXJfX29uLWl0ZW0nKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbFNsaWRlLmxlbmd0aDsgaSsrKSB7Ly90aGUgbG9vcCBpcyBkZXNpZ25lZCB0byBjcmF3bCB0aGUgcmVzdWx0aW5nIGFycmF5XG4gICAgYWxsU2xpZGVbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm15LXNsaWRlcl9fb24taXRlbS0tc2hvd1wiKTtcbiAgfVxuXG4gIGlmIChub3dTbGlkZSA+IHNsaWRlQWxsLmxlbmd0aCkge1xuICAgIG5vd1NsaWRlID0gMDtcbiAgfVxuXG4gIG5vd1NsaWRlID0gbm93U2xpZGUgKyAxO1xuXG4gICBjb25zb2xlLmxvZyhzbGlkZUFsbC5sZW5ndGgpO1xuXG4gIGFsbFNsaWRlW25vd1NsaWRlXS5jbGFzc0xpc3QuYWRkKFwibXktc2xpZGVyX19vbi1pdGVtLS1zaG93XCIpO1xuICByZXR1cm4gbm93U2xpZGU7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyog0JTQu9GPINGB0L/RgNCw0YbRjtCy0LDQvdC90Y8g0L/QviDQutC70ZbQutGDINC90LAg0LDRgtGA0LjQsdGD0YIgKi9cblxuXG5cblxuXG5cblxuLy/QktC40LfQvdCw0YfQtdC90L3RjyDQvdC+0LzQtdGA0YMg0L/QviDQv9C+0YDRj9C00LrRgyDQutGA0YPQs9C70L7RlyDQutC90L7Qv9C60Lgg0L3QsCDRj9C60YMg0LrQu9GW0LrQvdGD0LvQuFxuXG52YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15LXNsaWRlcl9fYWxsLWRvdHNcIilbMF07XG5wYXJlbnQub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gIHZhciBlID0gZSB8fCBldmVudDtcbiAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IHBhcmVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmKHBhcmVudC5jaGlsZHJlbltpXSA9PSB0YXJnZXQpIHtcbiAgICAgIG5vd1NsaWRlID0gaTtcblxuXG4gICAgICB2YXIgYWxsU2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdteS1zbGlkZXJfX29uLWl0ZW0nKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxTbGlkZS5sZW5ndGg7IGkrKykgey8vdGhlIGxvb3AgaXMgZGVzaWduZWQgdG8gY3Jhd2wgdGhlIHJlc3VsdGluZyBhcnJheVxuICAgICAgICBhbGxTbGlkZVtpXS5jbGFzc0xpc3QucmVtb3ZlKFwibXktc2xpZGVyX19vbi1pdGVtLS1zaG93XCIpO1xuICAgICAgfVxuXG5cbiAgICAgIGFsbFNsaWRlW25vd1NsaWRlXS5jbGFzc0xpc3QuYWRkKFwibXktc2xpZGVyX19vbi1pdGVtLS1zaG93XCIpO1xuXG4gICAgICByZXR1cm4gbm93U2xpZGU7XG5cblxuICAgIH07XG5cblxuXG5cblxuXG5cbiAgfVxufTtcblxuXG5cblxuXG5cblxuXG5cblxuLypcblxuXG52YXIgbm93TnVtYmVyRG90ID0gbm93RG90Qi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJyk7XG5jb25zb2xlLmxvZyhub3dOdW1iZXJEb3QpO1xuXG4qLyJdfQ==
