// Tests whether a number is prime
function isPrime(number) {
    // 0 and 1 are not prime numbers
    if (number < 2) {
        return false;
    }
    // if the input number is greater than 1 then we test it
    else {
        // We only need to test up to the square root of the input for optimization
        for (let j = 2; j*j <= number; j++) {
            // modulus operation tests if number is divisible by any number other than 1 and itself
            if (number % j === 0) return false;
        }
        return true;
    }
}

function printAllPrimes(n) {
    var number = parseInt(n);
    if (number < 2) {
        return false;
    } else {
        // Creating a new element to print
        const resultsParagraph = document.createElement("p");
        
        // Creating a string of primes that will be appended every time we find a new prime <= number
        let primes = [];
        for (let i = 2; i <= number; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }

        // Adding the contents of primes as text to the new paragraph
        resultsParagraph.textContent = `Prime numbers up to ${number}: ${primes.join(", ")}`;

        // Printing the result after the submission button
        document.querySelector("#submission").after(resultsParagraph);
    }
}