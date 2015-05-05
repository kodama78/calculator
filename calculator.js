var number0=$('#number_0').val();
var number1=$('#number_1').val();
var result = null;
console.log(result);

// var validation = function(){
//     if($('.number').val().isNaN == true) {
//         console.log("Number, duh!");
//     }
// }

function add_numbers(){
    var number0=$('#number_0').val();
    var number1=$('#number_1').val();
    $('#operator').html('+');    
    result = (parseInt(number0) + parseInt(number1));
    $('#result_display').html(result);
    console.log(result);
}

function subtract_numbers(){
    var number0=$('#number_0').val();
    var number1=$('#number_1').val();
    $('#operator').html('-');
    result = (parseInt(number0) - parseInt(number1));
    $('#result_display').html(result);
    console.log(result);
}

function multiply_numbers(){
    var number0=$('#number_0').val();
    var number1=$('#number_1').val();
    $('#operator').html('*');
    result = (parseInt(number0) * parseInt(number1));
    $('#result_display').html(result);
    console.log(result);    
}

function divide_numbers(){
    var number0=$('#number_0').val();
    var number1=$('#number_1').val();
    $('#operator').html('/');
    result = parseInt(number0) / parseInt(number1);
    $('#result_display').html(result);
    console.log(result);
}

$( document ).ready(function(){

});