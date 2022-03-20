function addition(number1, number2){
	let addition = number1 + number2;
	return addition;
}
function substraction(number1, number2){
	let substraction = number1 - number2;
	return substraction;
}
function multiplication(number1, number2){
	let multiplication = number1 * number2;
	return multiplication;
}
function division(number1, number2){
	let division = number1 / number2;
	division = division.toFixed(2);
	return division;
}
export { addition, substraction, multiplication, division };