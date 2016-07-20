/*
Problem:
Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

Source:
https://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list/javascript

*/

var min = function(list){
    return Math.min(...list)
};

var max = function(list){
    return Math.max(...list)
};

