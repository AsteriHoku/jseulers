{/* <p>$n!$ means $n \times (n - 1) \times \cdots \times 3 \times 2 \times 1$.</p>
<p>For example, $10! = 10 \times 9 \times \cdots \times 3 \times 2 \times 1 = 3628800$,<br>and the sum of the digits in the number $10!$ is $3 + 6 + 2 + 8 + 8 + 0 + 0 = 27$.</p>
<p>Find the sum of the digits in the number $100!$.</p> */}


const getTotal = (n) => {
    let arr = new Array(n);
    for (let i = 0; i <= n; ++i) {
        arr[i] = factorial(i);
    }
    let sum = arr.reduce((a, b) => a + b, 0n);
    //sum arr
    return sum;
};

const factorial = (n) => {
    let arr = new Array(n);
    let total = 1n;
    for (let i = 1n; i <= n; i++) {
        //add each new num to an... array? string? and then add them all together?
        total *= i;
        arr[i - 1n] = `${i}! = ${total}`;
    }
    console.log(arr);
    return total;
};

console.log(factorial(10).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0));
console.log(factorial(100).toString());

let sumString = '';
for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; i < arr[i].length; ++j) {
        //todo push arr[i][j] to sumString
        //todo push sums of all arr[i] to sumString and carry remainder
    }
    //todo push sums of all arr[i] to sumString and carry remainder
}

//when I get to middle number, I can use that as a variable to multiply by itself to get the next number or
//to multiply by itself to account for all the other times it would occur
//10! = 5! occurrs 1x for itself and then 5x more for 6! 7! 8! 9! 10!

// // Create uint64-like values using BigInt
// const uint64Value = BigInt("18446744073709551615"); // Maximum value of a uint64

// // Perform arithmetic operations
// const additionResult = uint64Value + BigInt(42);
// const subtractionResult = uint64Value - BigInt(10);
// const multiplicationResult = uint64Value * BigInt(2);
// const divisionResult = uint64Value / BigInt(3); // Result will be a float (BigInt doesn't support float division)

// // Comparison
// const isGreaterThan = uint64Value > BigInt(1000);
// const isLessThan = uint64Value < BigInt(999999);

// // Convert BigInt to regular number (if within safe range)
// const regularNumber = Number(uint64Value);

// console.log("Addition:", additionResult.toString());
// console.log("Subtraction:", subtractionResult.toString());
// console.log("Multiplication:", multiplicationResult.toString());
// console.log("Division:", divisionResult.toString());
// console.log("Is Greater Than:", isGreaterThan);
// console.log("Is Less Than:", isLessThan);
// console.log("Regular Number:", regularNumber);
