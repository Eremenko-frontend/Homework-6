/* Homework 6.3: Function */

// Prime number

function isPrime (n) {
  var trigger;
  var x;
  var j;

  if ((n > 2) && (n % 2 == 0)) {// determines the even numbers, in particular if the remainder of the division by module is 0
    console.log("false");
  } else if ((n != 0) && (n % 2 == 0)) {
    console.log("true");
  }else if (n == 1) {
    // not prime number
    console.log("false");
  } else if (n == 2) {
    // number equal to 2
    console.log("true");
  } else {
    // checking odd numbers
    x = Math.sqrt(n);//definition of the root square
    j = Math.round(x);//rounds up to the nearest whole
    trigger = false;

    for(i=2; i < (j + 1); i++)
      if(n % i == 0) {
        console.log("false");
        trigger = true;
      }

    if ((trigger == false) && (n != 0)) {
      console.log("true");
    } else {
      console.log("false");
    }

  }

};

console.log('-------------Prime number----------');
isPrime(0);
isPrime(1);
isPrime(17);
isPrime(10000000000000);

// Factorial

function factorial (p) {
  var answerFactorial = 1;
  if (p === 0 || p ===1) {
    console.log(1);
  } else {
    for (var i = 1; i <= p; i++) {
      answerFactorial = answerFactorial * i;
    }
    console.log(answerFactorial);
  }
};

console.log('---------------Factorial------------');
factorial(0);
factorial(1);
factorial(6);

// Fibonacci

function fib (x) {

  myArray = [];//clean array to record numbers
  myArray[0] = 0;//first start number (in all cases the same)
  myArray[1] = 1;//second start number (in all cases the same)

  if (x > 2) {
    for (i = 2; i <= x; i++) {
      myArray[i] = myArray[i - 1] + myArray[i - 2];//adding numbers of Fibonacci and recording them in an array
    };
  };

  console.log(myArray[x]);

};

console.log('---------------Fibonacci------------');
fib(0);
fib(1);
fib(10);
fib(20);

// isSorted

function isSorted (myMassive) {

  var x = 0;

  for (var i = 0; i < myMassive.length; i++) {
    for (i = 1; i < myMassive.length; i++) {
      if (myMassive[i - 1] <= myMassive[i]) {
        x++;
      }
    }
  }

  if((x == myMassive.length - 1) || (myMassive.length == 0)) {
    console.log('true');
  } else {
    console.log('false');
  }


};

console.log('---------------isSorted------------');
isSorted([]);
isSorted([-Infinity, -5, 0, 3, 9]);
isSorted([3, 9, -3, 10]);

// reverse

function myReverse (myString) {

  var newMyString = '';
  var i;
  if (myString.length === 0) {
    newMyString = "''";
  } else {
    for (i = myString.length - 1; i >= 0; i--) {
      newMyString = newMyString + myString.charAt(i);
    }
  }


  console.log(newMyString);

}

console.log('---------------reverse------------');
myReverse('');
myReverse('abcdef');

// indexOf

function indexOf (myMassive, myNumber) {
  var i;
  var answer;

  for (i = 0; i < myMassive.length; i++) {
    if (myMassive[i] === myNumber) {
      answer = i;
      break;
    } else {
      answer = -1;
    }
  }
  console.log(answer);

}

console.log('---------------indexOf------------');
indexOf([1, 2, 3], 1);
indexOf([1, 2, 3], 4);

// isPalindrome

function isPalindrome (myString) {
  var myStringWithoutSpaces = myString.replace(/\s/g, '');
  var myStringLowerCase = myStringWithoutSpaces.toLowerCase();
  var newMyString = '';
  var i;

  if (myStringLowerCase.length === 0) {
    newMyString = "''";
  } else {
    for (i = myString.length - 1; i >= 0; i--) {
      newMyString = newMyString + myStringLowerCase.charAt(i);
    }
  }


  if (newMyString === myStringLowerCase) {
    console.log(true);
  } else if (myStringLowerCase === '') {
    console.log(true);
  } else {
    console.log(false);
  }



}

console.log('---------------isPalindrome------------');
isPalindrome('');                              // true
isPalindrome('abcdcba');                // true
isPalindrome('abcd');                      // false
isPalindrome('A man a plan a canal Panama');  // true

// missing

function missing (myMassive) {
  var newMassive = [];

  for (var i = 0; i < myMassive.length; i++) {
    var numberForNewMassive = myMassive[i];
    newMassive[numberForNewMassive] = numberForNewMassive;
  }

  newMassive[0] = 0;
  var x;
  var answer;
  for (x = 1; x < newMassive.length; x++) {
    if ( undefined === newMassive[x]) {
      answer = x;
    }
  }
  console.log(answer);

}

console.log('---------------missing------------');
missing([]);
missing([1, 4, 3]);
missing([2, 3, 4]);
missing([5, 1, 4, 2]);
missing([1, 2, 3, 4]);

/* isBalanced */

function isBalanced (myString) {
  var numberOfCharactersOpen = 0;
  var numberOfCharactersClose = 0;
  var numberOfSpaces = 0;
  var numberOfReservedWords = 0;
  var stringArray = [];

  string = myString.split(" ");

  for(var i =0; i < string.length; i++){
    stringArray.push(string[i]);
    if(i != string.length-1){
      stringArray.push(" ");
    }

  }

  for (var x = 0; x < stringArray.length; x++) {
    if (stringArray[x] === "{") {
      numberOfCharactersOpen = numberOfCharactersOpen + 1;
    } else if (stringArray[x] === "}") {
      numberOfCharactersClose = numberOfCharactersClose + 1;
    } else if (stringArray[x] === " ") {
      numberOfSpaces = numberOfSpaces + 1;
    } else if ((stringArray[x] != "{") || (stringArray[x] != "}") || (stringArray[x] != " ")) {
      numberOfReservedWords = numberOfReservedWords + 1;
    }
  }
  if ((numberOfCharactersOpen === numberOfCharactersClose) && (numberOfSpaces != 0) && (numberOfReservedWords != 0)) {
    console.log(true);
  } else {
    console.log(false);
  }

};

console.log('---------------isBalanced------------');
isBalanced('}{');
isBalanced('{{}');
isBalanced('{}{}');
isBalanced('foo { bar { baz } boo }');
isBalanced('foo { bar { baz }');
isBalanced('foo { bar } }');