/*
Problem:
Consider an array of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).

Source:
https://www.codewars.com/kata/counting-sheep-dot-dot-dot/javascript
*/


function countSheeps(arrayOfSheep) {

  // define shell array to store truths
  var trueSheep = [];
  
  //cycle through input array and push truths into new shell array
  for(i = 0; i < arrayOfSheep.length; i++){
     if(arrayOfSheep[i] == true){
       trueSheep.push(i);
      }
    }
    
    //length of shell array is number of truths in input array
     return trueSheep.length;  
}


countSheeps([true,  true,  true,  false, true,  true,  true,  true , true,  false,]); //8
