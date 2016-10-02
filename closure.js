/**bad and bugged: use global variable, accessed by both functions*/
var count = 0;

function countTrees (){
  count++;
  console.log("Trees: " + count);
}

function countCats(){
  count++;
  console.log("Cats: " + count);
}
countTrees();
countCats();

/*CLOSURE v.1*/
function makeApplesCounter (){
  //declare var inside the function to keep global space clean
  var count = 0;
  return function(){
    count++;
    console.log("Apples: " + count);  
  }  
}

var countApples =  makeApplesCounter();
countApples();

/*CLOSURE v.2*/
function makeBananasCount(){
  //use same variable to check independent environment is created and mantained
  var count = 0;
  function BananaCounter(){
    count++;
    console.log("Bananas: " + count);
  }
  return BananaCounter;  
}
//use again same varname to check that the inner function is independent
var bananaCounter = makeBananasCount();
bananaCounter();