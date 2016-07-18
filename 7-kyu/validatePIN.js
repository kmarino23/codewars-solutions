/* Problem:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

Source:
https://www.codewars.com/kata/regex-validate-pin-code/javascript
*/




function validatePIN (pin) {
	
//all valid pins will be either 4 or 6 in length	
if (pin.length === 4 || pin.length === 6){
	
//test if input is a not a number or a float; if not return true.
  	if (isNaN(pin)){
  		return false;
  	} else if (!pin%1 === 0){
		return false;
	} else {
		return true;
	}
    
} else {
	return false;
	}
}



validatePIN(".123"); //false
validatePIN("1234"); //true
validatePIN("a234"); //false
