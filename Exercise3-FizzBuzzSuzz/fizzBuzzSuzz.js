module.exports = (n) => {
	if (n%3==0 && n%5==0 && n%7==0) return "FizzBuzzSuzz";
	else if (n%3==0 && n%7==0) return "FizzSuzz";
	else if (n%5==0 && n%7==0) return "BuzzSuzz";
	else if (n%3==0 && n%5==0) return "FizzBuzz";
	else if (n%7==0) return "Suzz";
	else if (n%5==0) return "Buzz";
	else if (n%3==0) return "Fizz";
	else return "";
};