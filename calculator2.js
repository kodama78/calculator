
var numberString = ''; //string that is concatenating my number to a string
var numbers = ['','']; //the array that holds my numberString
var indexOfString = 0; //index of the string created in numberString
var op = '';
var decimal_point = false;
clear_all_data = false;
var answer = 0

// CLEAR FUNCTION
function clear_all(clear_all_data){
	numbers[1] = '';
	numberString = ''
	decimal_point = false;
	if (clear_all_data) {
		numbers[0] = '';
		indexOfString = 0;
		$('#inputdisplay').val(0);
	}
}

// CALCULATE FUNCTION
function calculate(){
	var num1 = parseFloat(numbers[0]);
	var num2 = parseFloat(numbers[1]);
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
		indexOfString = 1;
		numberString += ' + ';
		display.val(numberString);
		decimal_point = false;
		op = "+";
		calc_mult_num();

		//$('#equal-sign').addClass('addition')
	});
	// SUBTRACTION FUNCTION
	$('#subtraction-button').click(function(){
		console.log('subtraction-button clicked');
		indexOfString = 1;
		numberString += ' - ';
		display.val(numberString);
		decimal_point = false;
		op = '-';
		calc_mult_num();
		//$('#equal-sign').addClass('subtraction');
		
	});
	// MULTIPLICATION FUNCTION
	$('#multiplication-button').click(function(){
		console.log('multiplication-button clicked');
		indexOfString = 1;
		numberString += ' * ';
		display.val(numberString);
		decimal_point = false;
		op = '*'
		calc_mult_num();
		//$('#equal-sign').addClass('multiplication');
		
	});
	// DIVISION FUNCTION
	$('#division-button').click(function(){
		console.log('division-button clicked');
		indexOfString = 1;
		numberString += ' / ';
		display.val(numberString);
		decimal_point = false;
		op = '/'
		calc_mult_num();
		//$('#equal-sign').addClass('division');
		
	});
	// EQUAL SIGN
	$('#equal-sign').click(function(){
		console.log("equal sign clicked numbers=", numbers, op);
		calculate();
		var solved = numberString + " = " + answer; 
		display.val(solved);
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
