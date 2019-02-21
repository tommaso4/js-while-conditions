function sumArrayElements(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
//FUNZIONE CHE ESCLUDE I MULTIPLI DI 11
function multiplo11(num){
  if (num % 11 !=0) {
    return false;
  }
  return true;
}

// FUNZIOONE CHE MOLTIPLICA GLI ELEMENTI DELL ARRAY

function moltiplicazione(arr) {
  var mol = 1;
  for (var i = 0; i < arr.length; i++) {
    mol*= Number(arr[i])
  }
  return mol;
}
// FUNZIONE CHE ESTRAE ELEMENTI DI UN ARRAY FINO CHE NON SI VERIFICANO LE CONDIZIONI DEL "WHILE"
function askNumElementsWhileSum() {
  var nums = [];
  var n;
  do {
    n = prompt("Dammi un numero da mettere nell'array");
    nums.push(n);
  } while (sumArrayElements(nums) && !multiplo11(n) && moltiplicazione(nums)<500);
  return nums;
}

var print = askNumElementsWhileSum();
console.log(print);
