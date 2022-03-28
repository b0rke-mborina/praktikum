module.exports = (n) => {
	if (n%3==0 && n%5==0) return "FizzBuzz";
	else if (n%5==0) return "Buzz";
	else if (n%3==0) return "Fizz";
	else return "";
	// if (n==15) return "FizzBuzz";
	// else if (n==5) return "Buzz";
	// else if (n==3) return "Fizz";
	// else return "";
	// if(i/3==0) return "Fizz";
	// if(i/5==0) return "Buzz";
	// if(i/3==0 && i/5==0) return "FizzBuzz";
};

// function division(n) {
	// for(i=1;i<=n;i++) {
		// if(i/3==0) return "Fizz";
		// if(i/5==0) return "Buzz";
		// if(i/3==0 && i/5==0) return "FizzBuzz";
	// }
// }