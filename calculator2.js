
var numberString = ''; //string that is concatenating my number to a string
var numbers = []; //the array that holds my numberString
var indexOfString = 0; //index of the string created in numberString
var op = '';
var decimal_point = false;
clear_all_data = false;
var answer = 0
// CLEAR FUNCTION
function clear_all(clear_all_data){
	numbers[0] = '';
	numbers[1] = '';
	numberString = ''
	indexOfString = 0;
	decimal_point = false;
	if (clear_all_data) {
		$('#inputdisplay').val(0);
	}
}

// CALCULATE FUNCTION
function calculate(){
	var num1 = parseFloat(numbers[0]);
	var num2 = parseFloat(numbers[1]);

	switch (op){
		case '+':
			answer = num1 + num2;
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
	
	//$('#inputdisplay').val(answer);
	
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
		if (numbers[1] != undefined){
			calculate();
			numbers[0] = answer;
			numbers[1]=''
		}
		//$('#equal-sign').addClass('addition')
		
	});
	// SUBTRACTION FUNCTION
	$('#subtraction-button').click(function(){
		console.log('subtraction-button clicked');
		indexOfString = 1;
		numberString = '';
		decimal_point = false;
		//$('#equal-sign').addClass('subtraction');
		op = '-'
	});
	// MULTIPLICATION FUNCTION
	$('#multiplication-button').click(function(){
		console.log('multiplication-button clicked');
		indexOfString = 1;
		numberString = '';
		decimal_point = false;
		//$('#equal-sign').addClass('multiplication');
		op = '*'
	});
	// DIVISION FUNCTION
	$('#division-button').click(function(){
		console.log('division-button clicked');
		indexOfString = 1;
		numberString = '';
		decimal_point = false;
		//$('#equal-sign').addClass('division');
		op = '/'
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
		console.log("number string", numberString);
		numbers[indexOfString] = num;
		$('#inputdisplay').val(numberString);
	});
	//AC KEY
	$('#all-clear-key').click(function(){
		numberString = ''; //string that is concatenating my number to a string
		numbers = []; //the array that holds my numberString
		indexOfString = 0; //index of the string created in numberString
		decimal_point = false;
		$('#inputdisplay').val(0);
	});
	//CLEAR KEY
	$('#clear_key').click(function(){
		console.log('clear key pushed');
		numberString = ''
		numbers[indexOfString] = '';
		$('#inputdisplay').val(0);
		decimal_point = false;
	});
	// DECIMAL KEY
	$('#decimal_key').click(function(){
		console.log('decimal button clicked');
		if (decimal_point == false){
			numberString = numberString + $(this).text();
			numbers[indexOfString] = numberString;
			$('#inputdisplay').val(numberString);
			decimal_point = true;
		}	
	});	
});
