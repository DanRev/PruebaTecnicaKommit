function dieNumber(){
  var number = Math.floor(Math.random()* (6-1))+1;
  return number;
}

function generateNDieNumbers(times){
  var array = [];
  for(var i=0; i<times; i++){
    var number = dieNumber();
    array.push(number);
  }
  return array;
}
  
function deleteNDieNumbers(array,numbersDelete){
  var newArray = [];
  for(var i=numbersDelete; i<array.length; i++){
    newArray.push(array[i]);
  }
  return newArray;
}

var actualHand = [];

function renewData(numbersGenerated){
  for (let i = 0; i < numbersGenerated.length; i++) {
    actualHand.push(numbersGenerated[i]);
  }
}

function renewActualHand(deletedTimes){
  var newHand = [];
  for (let i = deletedTimes; i < actualHand.length; i++) {
    newHand.push(actualHand[i]);
  }
  actualHand = newHand;
}

function generateHandOfDies(n,m){
  var numbersGenerated = generateNDieNumbers(n);
  renewData(numbersGenerated);
  actualHand.length>0?deleteNDieNumbers(actualHand,m):deleteNDieNumbers(numbersGenerated,m);
  renewActualHand(m);
  var discardedNumbers = [];

  for (let i = 0; i < m; i++) {
    discardedNumbers.push(numbersGenerated[i]);
  }

  console.log('Estado de la mano: ',actualHand);
  console.log('Lanzamientos generados: ','(',numbersGenerated.length,')',':',numbersGenerated);
  console.log('Lanzamientos descartados: ','(',discardedNumbers.length,')',':',discardedNumbers);
  console.log(actualHand);

  return {handState:actualHand, numberGenerated: numbersGenerated, discardedNumbers:discardedNumbers}
}
