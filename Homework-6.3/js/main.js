function isPrime(o){var e,l,r;if(o>2&&o%2==0)console.log("false");else if(0!=o&&o%2==0)console.log("true");else if(1==o)console.log("false");else if(2==o)console.log("true");else{for(l=Math.sqrt(o),r=Math.round(l),e=!1,i=2;i<r+1;i++)o%i==0&&(console.log("false"),e=!0);0==e&&0!=o?console.log("true"):console.log("false")}}function factorial(o){var e=1;if(0===o||1===o)console.log(1);else{for(var l=1;l<=o;l++)e*=l;console.log(e)}}function fib(o){if(myArray=[],myArray[0]=0,myArray[1]=1,o>2)for(i=2;i<=o;i++)myArray[i]=myArray[i-1]+myArray[i-2];console.log(myArray[o])}function isSorted(o){for(var e=0,l=0;l<o.length;l++)for(l=1;l<o.length;l++)o[l-1]<=o[l]&&e++;e==o.length-1||0==o.length?console.log("true"):console.log("false")}function reverse(o){var e,l="";if(0==o.length)l="''";else for(e=o.length-1;e>=0;e--)l+=o.charAt(e);console.log(l)}function indexOf(o,e){var l,r;for(l=0;l<o.length;l++){if(o[l]==e){r=l;break}r=-1}console.log(r)}console.log("-------------Prime number----------"),isPrime(0),isPrime(1),isPrime(17),isPrime(1e13),console.log("---------------Factorial------------"),factorial(0),factorial(1),factorial(6),console.log("---------------Fibonacci------------"),fib(0),fib(1),fib(10),fib(20),console.log("---------------isSorted------------"),isSorted([]),isSorted([-1/0,-5,0,3,9]),isSorted([3,9,-3,10]),console.log("---------------reverse------------"),reverse(""),reverse("abcdef"),console.log("---------------indexOf------------"),indexOf([1,2,3],1),indexOf([1,2,3],4);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm4iLCJNYXRoIiwidHJpZ2dlciIsImZpYiIsIm15QXJyYXkiLCJ4IiwiaSIsInJldmVyc2UiLCJpbmRleE9mIiwibXlNYXNzaXZlIiwic3FydCIsImoiLCJyb3VuZCIsImZhY3RvcmlhbCIsInAiLCJhbnN3ZXJGYWN0b3JpYWwiLCJpc1NvcnRlZCIsImxlbmd0aCIsIm15U3RyaW5nIiwibmV3TXlTdHJpbmciLCJjaGFyQXQiLCJteU51bWJlciIsImFuc3dlciIsImlzUHJpbWUiLCJJbmZpbml0eSJdLCJtYXBwaW5ncyI6IkFBa0JJQSxTQUFRQyxRQUFSQyxHQUdJQyxJQUFBQSxFQUNBQSxFQUNKQyxFQTZDSixHQUFBRixFQUFTRyxHQUVQQyxFQUFBQSxHQUFhLEVBQ2JBLFFBQUFMLElBQWUsY0FDZixHQUFlLEdBQUFDLEdBQUFBLEVBQUEsR0FBQSxFQUVYSyxRQUNHQyxJQUFPQSxhQUtkUixHQUFZTSxHQUFKTCxFQXdDVkQsUUFBU1MsSUFBVCxjQXVCU0MsR0FBU0MsR0FBVEQsRUE3SExWLFFBQVFDLElBQUksWUFDUCxDQU1MLElBSkFNLEVBQUlKLEtBQUtTLEtBQUtWLEdBQ2RXLEVBQUlWLEtBQUtXLE1BQU1QLEdBQ2ZILEdBQVUsRUFFTkksRUFBRSxFQUFHQSxFQUFLSyxFQUFJLEVBQUlMLElBQ2pCTixFQUFJTSxHQUFLLElBQ1ZSLFFBQVFDLElBQUksU0FDWkcsR0FBVSxHQUdFLEdBQVhBLEdBQTJCLEdBQUxGLEVBQ3pCRixRQUFRQyxJQUFJLFFBRVpELFFBQVFDLElBQUksVUFlbEIsU0FBU2MsVUFBV0MsR0FDbEIsSUFBSUMsRUFBa0IsRUFDdEIsR0FBVSxJQUFORCxHQUFnQixJQUFMQSxFQUNiaEIsUUFBUUMsSUFBSSxPQUNQLENBQ0wsSUFBSyxJQUFJTyxFQUFJLEVBQUdBLEdBQUtRLEVBQUdSLElBQ3RCUyxHQUFvQ1QsRUFFdENSLFFBQVFDLElBQUlnQixJQVdoQixTQUFTWixJQUFLRSxHQU1aLEdBSkFELFdBQ0FBLFFBQVEsR0FBSyxFQUNiQSxRQUFRLEdBQUssRUFFVEMsRUFBSSxFQUNOLElBQUtDLEVBQUksRUFBR0EsR0FBS0QsRUFBR0MsSUFDbEJGLFFBQVFFLEdBQUtGLFFBQVFFLEVBQUksR0FBS0YsUUFBUUUsRUFBSSxHQUk5Q1IsUUFBUUMsSUFBSUssUUFBUUMsSUFZdEIsU0FBU1csU0FBVVAsR0FJakIsSUFBSyxJQUZESixFQUFJLEVBRUNDLEVBQUksRUFBR0EsRUFBSUcsRUFBVVEsT0FBUVgsSUFDcEMsSUFBS0EsRUFBSSxFQUFHQSxFQUFJRyxFQUFVUSxPQUFRWCxJQUM1QkcsRUFBVUgsRUFBSSxJQUFNRyxFQUFVSCxJQUNoQ0QsSUFLRkEsR0FBS0ksRUFBVVEsT0FBUyxHQUEyQixHQUFwQlIsRUFBVVEsT0FDM0NuQixRQUFRQyxJQUFJLFFBRVpELFFBQVFDLElBQUksU0FhaEIsU0FBU1EsUUFBU1csR0FFaEIsSUFDSVosRUFEQWEsRUFBYyxHQUVsQixHQUF1QixHQUFuQkQsRUFBU0QsT0FDWEUsRUFBYyxVQUVkLElBQUtiLEVBQUlZLEVBQVNELE9BQVMsRUFBR1gsR0FBSyxFQUFHQSxJQUNwQ2EsR0FBZUQsRUFBU0UsT0FBT2QsR0FLbkNSLFFBQVFDLElBQUlvQixHQVVkLFNBQVNYLFFBQVNDLEVBQVdZLEdBQzNCLElBQUlmLEVBQ0FnQixFQUVKLElBQUtoQixFQUFJLEVBQUdBLEVBQUlHLEVBQVVRLE9BQVFYLElBQUssQ0FDckMsR0FBSUcsRUFBVUgsSUFBTWUsRUFBVSxDQUM1QkMsRUFBU2hCLEVBQ1QsTUFFQWdCLEdBQVUsRUFHZHhCLFFBQVFDLElBQUl1QixHQWxIZHhCLFFBQVFDLElBQUksdUNBQ1p3QixRQUFRLEdBQ1JBLFFBQVEsR0FDUkEsUUFBUSxJQUNSQSxRQUFRLE1BZ0JSekIsUUFBUUMsSUFBSSx3Q0FDWmMsVUFBVSxHQUNWQSxVQUFVLEdBQ1ZBLFVBQVUsR0FvQlZmLFFBQVFDLElBQUksd0NBQ1pJLElBQUksR0FDSkEsSUFBSSxHQUNKQSxJQUFJLElBQ0pBLElBQUksSUF5QkpMLFFBQVFDLElBQUksdUNBQ1ppQixhQUNBQSxXQUFXUSxFQUFBQSxHQUFXLEVBQUcsRUFBRyxFQUFHLElBQy9CUixVQUFVLEVBQUcsR0FBSSxFQUFHLEtBcUJwQmxCLFFBQVFDLElBQUksc0NBQ1pRLFFBQVEsSUFDUkEsUUFBUSxVQW9CUlQsUUFBUUMsSUFBSSxzQ0FDWlMsU0FBUyxFQUFHLEVBQUcsR0FBSSxHQUNuQkEsU0FBUyxFQUFHLEVBQUcsR0FBSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSG9tZXdvcmsgNi4zOiBGdW5jdGlvbiAqL1xuXG4vLyBQcmltZSBudW1iZXJcblxuZnVuY3Rpb24gaXNQcmltZSAobikge1xuICB2YXIgdHJpZ2dlcjtcbiAgdmFyIHg7XG4gIHZhciBqO1xuXG4gIGlmICgobiA+IDIpICYmIChuICUgMiA9PSAwKSkgey8vIGRldGVybWluZXMgdGhlIGV2ZW4gbnVtYmVycywgaW4gcGFydGljdWxhciBpZiB0aGUgcmVtYWluZGVyIG9mIHRoZSBkaXZpc2lvbiBieSBtb2R1bGUgaXMgMFxuICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gIH0gZWxzZSBpZiAoKG4gIT0gMCkgJiYgKG4gJSAyID09IDApKSB7XG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICB9ZWxzZSBpZiAobiA9PSAxKSB7XG4gICAgLy8gbm90IHByaW1lIG51bWJlclxuICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gIH0gZWxzZSBpZiAobiA9PSAyKSB7XG4gICAgLy8gbnVtYmVyIGVxdWFsIHRvIDJcbiAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gY2hlY2tpbmcgb2RkIG51bWJlcnNcbiAgICB4ID0gTWF0aC5zcXJ0KG4pOy8vZGVmaW5pdGlvbiBvZiB0aGUgcm9vdCBzcXVhcmVcbiAgICBqID0gTWF0aC5yb3VuZCh4KTsvL3JvdW5kcyB1cCB0byB0aGUgbmVhcmVzdCB3aG9sZVxuICAgIHRyaWdnZXIgPSBmYWxzZTtcblxuICAgIGZvcihpPTI7IGkgPCAoaiArIDEpOyBpKyspXG4gICAgICBpZihuICUgaSA9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gICAgICAgIHRyaWdnZXIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgaWYgKCh0cmlnZ2VyID09IGZhbHNlKSAmJiAobiAhPSAwKSkge1xuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xuICAgIH1cblxuICB9XG5cbn07XG5cbmNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tUHJpbWUgbnVtYmVyLS0tLS0tLS0tLScpO1xuaXNQcmltZSgwKTtcbmlzUHJpbWUoMSk7XG5pc1ByaW1lKDE3KTtcbmlzUHJpbWUoMTAwMDAwMDAwMDAwMDApO1xuXG4vLyBGYWN0b3JpYWxcblxuZnVuY3Rpb24gZmFjdG9yaWFsIChwKSB7XG4gIHZhciBhbnN3ZXJGYWN0b3JpYWwgPSAxO1xuICBpZiAocCA9PT0gMCB8fCBwID09PTEpIHtcbiAgICBjb25zb2xlLmxvZygxKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBwOyBpKyspIHtcbiAgICAgIGFuc3dlckZhY3RvcmlhbCA9IGFuc3dlckZhY3RvcmlhbCAqIGk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFuc3dlckZhY3RvcmlhbCk7XG4gIH1cbn07XG5cbmNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS1GYWN0b3JpYWwtLS0tLS0tLS0tLS0nKTtcbmZhY3RvcmlhbCgwKTtcbmZhY3RvcmlhbCgxKTtcbmZhY3RvcmlhbCg2KTtcblxuLy8gRmlib25hY2NpXG5cbmZ1bmN0aW9uIGZpYiAoeCkge1xuXG4gIG15QXJyYXkgPSBbXTsvL2NsZWFuIGFycmF5IHRvIHJlY29yZCBudW1iZXJzXG4gIG15QXJyYXlbMF0gPSAwOy8vZmlyc3Qgc3RhcnQgbnVtYmVyIChpbiBhbGwgY2FzZXMgdGhlIHNhbWUpXG4gIG15QXJyYXlbMV0gPSAxOy8vc2Vjb25kIHN0YXJ0IG51bWJlciAoaW4gYWxsIGNhc2VzIHRoZSBzYW1lKVxuXG4gIGlmICh4ID4gMikge1xuICAgIGZvciAoaSA9IDI7IGkgPD0geDsgaSsrKSB7XG4gICAgICBteUFycmF5W2ldID0gbXlBcnJheVtpIC0gMV0gKyBteUFycmF5W2kgLSAyXTsvL2FkZGluZyBudW1iZXJzIG9mIEZpYm9uYWNjaSBhbmQgcmVjb3JkaW5nIHRoZW0gaW4gYW4gYXJyYXlcbiAgICB9O1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKG15QXJyYXlbeF0pO1xuXG59O1xuXG5jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tRmlib25hY2NpLS0tLS0tLS0tLS0tJyk7XG5maWIoMCk7XG5maWIoMSk7XG5maWIoMTApO1xuZmliKDIwKTtcblxuLy8gaXNTb3J0ZWRcblxuZnVuY3Rpb24gaXNTb3J0ZWQgKG15TWFzc2l2ZSkge1xuXG4gIHZhciB4ID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG15TWFzc2l2ZS5sZW5ndGg7IGkrKykge1xuICAgIGZvciAoaSA9IDE7IGkgPCBteU1hc3NpdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChteU1hc3NpdmVbaSAtIDFdIDw9IG15TWFzc2l2ZVtpXSkge1xuICAgICAgICB4Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYoKHggPT0gbXlNYXNzaXZlLmxlbmd0aCAtIDEpIHx8IChteU1hc3NpdmUubGVuZ3RoID09IDApKSB7XG4gICAgY29uc29sZS5sb2coJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZmFsc2UnKTtcbiAgfVxuXG5cbn07XG5cbmNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS1pc1NvcnRlZC0tLS0tLS0tLS0tLScpO1xuaXNTb3J0ZWQoW10pO1xuaXNTb3J0ZWQoWy1JbmZpbml0eSwgLTUsIDAsIDMsIDldKTtcbmlzU29ydGVkKFszLCA5LCAtMywgMTBdKTtcblxuLy8gcmV2ZXJzZVxuXG5mdW5jdGlvbiByZXZlcnNlIChteVN0cmluZykge1xuXG4gIHZhciBuZXdNeVN0cmluZyA9ICcnO1xuICB2YXIgaTtcbiAgaWYgKG15U3RyaW5nLmxlbmd0aCA9PSAwKSB7XG4gICAgbmV3TXlTdHJpbmcgPSBcIicnXCI7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChpID0gbXlTdHJpbmcubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIG5ld015U3RyaW5nICs9IG15U3RyaW5nLmNoYXJBdChpKTtcbiAgICB9XG4gIH1cblxuXG4gIGNvbnNvbGUubG9nKG5ld015U3RyaW5nKTtcblxufVxuXG5jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tcmV2ZXJzZS0tLS0tLS0tLS0tLScpO1xucmV2ZXJzZSgnJyk7XG5yZXZlcnNlKCdhYmNkZWYnKTtcblxuLy8gaW5kZXhPZlxuXG5mdW5jdGlvbiBpbmRleE9mIChteU1hc3NpdmUsIG15TnVtYmVyKSB7XG4gIHZhciBpO1xuICB2YXIgYW5zd2VyO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBteU1hc3NpdmUubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobXlNYXNzaXZlW2ldID09IG15TnVtYmVyKSB7XG4gICAgICBhbnN3ZXIgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuc3dlciA9IC0xO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhhbnN3ZXIpO1xuXG59XG5cbmNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS1pbmRleE9mLS0tLS0tLS0tLS0tJyk7XG5pbmRleE9mKFsxLCAyLCAzXSwgMSk7XG5pbmRleE9mKFsxLCAyLCAzXSwgNCk7XG5cbiJdfQ==