/*
Problem:
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Source:
https://www.codewars.com/kata/list-filtering/javascript
*/


function filter_list(l) {

  //create shell array for numbers
  var num = [];
  
  //cycle through input array and push numbers into shell array
  for(var i = 0; i<l.length; i++){
    if (typeof(l[i]) === 'number'){
        num.push(l[i]);
     }
   }
  return num;
}


filter_list([1,2,'a','b']) //[1,2]
filter_list([1,'a','b',0,15]) //[1,0,15]
filter_list([1,2,'aasf','1','123',123]) //[1,2,123]
