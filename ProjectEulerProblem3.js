/**The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? **/

largestPrime = 1;
for (var i=1; i < 10000; i++) {
	for (var x=2; x<i; x++) {
		if ((i % x !== 0) && ((600851475143 % i) === 0)) {
			largestPrime = i;
		}
	}
}
console.log("The largest prime factor of 600851475143 is " + largestPrime);