function isPrime(num) {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) return false;

    // Check if any number between 2 and num-1 divides it cleanly
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Found a factor, so it's not prime
        }
    }

    return true; // No factors found, it is prime
}

// Test cases
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
