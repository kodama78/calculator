
var numberString = ''; //string that is concatenating my number to a string
var numbers = ['', '']; //the array that holds my numberString
var indexOfString = 0; //index of the string created in numberString
var op = '';
var decimal_point = false;
clear_all_data = false;
var answer = null;
var solved = null;
var temp_num = '';
var num1 = 0;
var num2 = 0;
// CLEAR FUNCTION
function clear_all(clear_all_data){
	numbers[1] = '';
	numberString = '';
	decimal_point = false;
	if (clear_all_data) {
		numbers[0] = '';
		indexOfString = 0;
		$('#inputdisplay').val(0);
	}
}
function iterator(){
	for (var i = 0; i < numbers.length; i++){
		if(numbers[i] == '*' || numbers[i] == '/'){
			op = numbers[i];
			num1 = parseFloat(numbers[i-1]);
			num2 = parseFloat(numbers[i+1]);
			calculate();
			numbers[i-1] = answer;
			numbers.splice(i, 2);
		}
	}
	for (var i = 0; i < numbers.length; i++){
		if(numbers[i] == '+' || numbers[i] == '-'){
			op = numbers[i];
			num1 = parseFloat(numbers[i-1]);
			num2 = parseFloat(numbers[i+1]);
			console.log('num1: ', num1);
			console.log('num2: ', num2);
			calculate();
			numbers[i-1] = answer;
			numbers.splice(i, 2);
		}
	}
}	

// CALCULATE FUNCTION
function calculate(){
	console.log('I am in the calculate function')
	console.log('num1 : ',num1);
	console.log('num2 : ',num2);

	switch (op){
		
		
		case '+':
			answer = num1 + num2;
			console.log('result: ',answer)
	 		op = '+';
	 		break;
 		case '-':
 			answer = num1 - num2;
	 		op = '-';
	 		break;
 		case '*':
 			answer = num1 * num2;
	 		op = '*';
	 		break;
 		case '/':
 			answer = num1 / num2;
	 		op = '/';
		 	break;
	}
}

// CALCULATE MULTIPLE NUMBERS
function calc_mult_num(){
	if (numbers[1] != ''){
			calculate();
			numbers[0] = answer;
			numbers[1]='';
	}
}

$( document).ready(function(){

	var display = $("#inputdisplay");

	// ADDITION FUNCTION
	$('#addition-button').click(function(){
		console.log("addition-button clicked");
		if (solved !== null && numbers[0] == ""){
			numbers[0] = answer;
			numbers[1] = answer;
			//calculate();
		} else {
			
			indexOfString += 1;
			numbers[indexOfString] = '+';
			numberString += ' + ';
			indexOfString += 1;
			numbers[indexOfString] = '';
			display.val(numberString);
			decimal_point = false;
			op = "+";
			//calc_mult_num();
		}
		$('#equal-sign').addClass('addition')
	});
	// SUBTRACTION FUNCTION
	$('#subtraction-button').click(function(){
		console.log('subtraction-button clicked');
		if (solved !== null && numbers[0] == ""){
			numbers[0] = answer;
			numbers[1] = answer;
			//calculate();
		} else {
			indexOfString += 1;
			numbers[indexOfString] = '-';
			numberString += ' - ';
			indexOfString += 1;
			numbers[indexOfString] = '';
			display.val(numberString);
			decimal_point = false;
			op = "-";
			//calc_mult_num();
			//$('#equal-sign').addClass('subtraction');
		}
	});
	// MULTIPLICATION FUNCTION
	$('#multiplication-button').click(function(){
		console.log('multiplication-button clicked');
		if (solved !== null && numbers[0] == ""){
			numbers[0] = answer;
			numbers[1] = answer;
			//calculate();
		} else {
			indexOfString += 1;
			numbers[indexOfString] = '*';
			numberString += ' * ';
			indexOfString += 1;
			numbers[indexOfString] = '';
			display.val(numberString);
			decimal_point = false;
			op = "*";
			//calc_mult_num();
		//$('#equal-sign').addClass('multiplication');
		}
	});
	// DIVISION FUNCTION
	$('#division-button').click(function(){
		console.log('division-button clicked');
		if (solved !== null && numbers[0] == ""){
			numbers[0] = answer;
			numbers[1] = answer;
			//calculate();
		} else {
			indexOfString += 1;
			numbers[indexOfString] = '/';
			numberString += ' / ';
			indexOfString += 1;
			numbers[indexOfString] = '';
			display.val(numberString);
			decimal_point = false;
			op = "/";
			//calc_mult_num();
			//$('#equal-sign').addClass('division');
		}
	});
	// EQUAL SIGN
	$('#equal-sign').click(function(){
		iterator();
		$('#inputdisplay').val(answer);
		// console.log("equal sign clicked numbers=", numbers, op);
		// calculate();
		// solved = numberString + " = " + answer; 
		// clear_all(true);
		// display.val(solved);
		
	});
	
	// NUMBER BUTTONS
	$('.number-button').click(function(){
		var num = $(this).text();
		numberString += num;
		console.log('putting the digit '+num+' into position '+indexOfString);
		console.log('array now is',numbers)
		numbers[indexOfString] += num;
		console.log("number string", numberString);
		console.log("number array is ", numbers);	
		$('#inputdisplay').val(numberString);
	});
	//AC KEY
	$('#all-clear-key').click(function(){
		clear_all(true);
	});
	//CLEAR KEY - STILL HAS VISUAL DISPLAY ISSUES
	$('#clear_key').click(function(){
		clear_all();
	});
	// DECIMAL KEY
	$('#decimal_key').click(function(){
		console.log('decimal button clicked');
		if (decimal_point == false){
			var dec = $(this).text();
			numberString += dec;
			numbers[indexOfString] += dec;
			$('#inputdisplay').val(numberString);
			decimal_point = true;
		}	
	});	
});
