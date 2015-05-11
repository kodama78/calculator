
var numberString = ''; //string that is concatenating my number to a string
var numbers = ['', '']; //the array that holds my numberString
var indexOfString = 0; //index of the string created in numberString
var op = '';
var decimal_point = false;
var clear_all_data = false;
var answer = null;
var solved = null;
var temp_num = '';
var num1 = 0;
var num2 = 0;
var spliced_elements = [];
var display = $("#inputdisplay");
// CLEAR FUNCTION
function clear_all(clear_all_data){
	numbers[1] = '';
	numberString = '';
	decimal_point = false;
	if (clear_all_data) {
		numbers = ['', ''];
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
			spliced_elements = numbers.splice(i, 2);
			i = 0;
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
			spliced_elements = numbers.splice(i, 2);
			i = 0;
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
	solved = answer;
}

// CALCULATE MULTIPLE NUMBERS
// function calc_mult_num(){
// 	if (numbers[1] != ''){
// 			calculate();
// 			numbers[0] = answer;
// 			numbers[1]='';
// 	}
// }

function checkLastIndexIsOperator(){
	var operatorsArray = ["+", "-", "*", "/"];
	//checks if the operator variable is inside the operators Array
	if( operatorsArray.indexOf(numbers[numbers.length-1]) == -1){
		return false;
	}
	return true;
}

function addingTheOperation(operator){
	if (solved !== null && numbers[0] == solved){
			numbers[0] = answer;
			numbers[1] = op;
			numbers[2] = answer;
	}
	//check if we already added an operator
	else if (checkLastIndexIsOperator(operator)){

	//operator is added already is it the same
	 	if(operator === numbers[numbers.length-1]){
	 		return false;
	 	}
		else if(operator !== numbers[numbers.length-1]){
			numbers[numbers.length-1] = operator;
		}
	}
	else{
		
		indexOfString += 1;
		numbers[indexOfString] = operator;
		//indexOfString += 1;
		//	numbers[indexOfString] = '';
 		//numberString += ' '+ op;
 		console.log('numbers array is: ', numbers)
		decimal_point = false;
	}
}

$( document).ready(function(){

	// ADDITION FUNCTION
	$('#addition-button').click(function(){
		op = "+"
		console.log("addition-button clicked");
		addingTheOperation("+");
		numberString += ' ' + op + ' ';
		$('#inputdisplay').val(numberString);
	});
	// SUBTRACTION FUNCTION
	$('#subtraction-button').click(function(){
		op = "-";
		console.log('subtraction-button clicked');
		addingTheOperation("-");
		numberString += op + ' ';
		$('#inputdisplay').val(numberString);
	});
	// MULTIPLICATION FUNCTION
	$('#multiplication-button').click(function(){
		op = "*";
		console.log('multiplication-button clicked');
		addingTheOperation("*");
		numberString += op + ' ';
		$('#inputdisplay').val(numberString);
	});
	// DIVISION FUNCTION
	$('#division-button').click(function(){
		op = "/";
		console.log('division-button clicked');
		addingTheOperation("/");
		numberString += op + ' ';
		$('#inputdisplay').val(numberString);
	});
	// EQUAL SIGN
	$('#equal-sign').click(function(){
		iterator();
		$('#inputdisplay').val(answer);
		console.log('spliced elements are: ', spliced_elements);
		numbers[1] = spliced_elements[0];
		numbers[2] = spliced_elements[1];
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
		if(numbers[numbers.length-1] == '' || decimal_point == true){
			numbers[indexOfString] += num;
		} else {
			indexOfString+= 1;
			numbers[indexOfString] = '';
			numbers[indexOfString] += num;
		}
		
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
