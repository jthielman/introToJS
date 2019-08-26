console.log('Arrays');

// Challenge 1
// Write a function that takes an array and an index and prints out that value

const indexAndPrint = (arr, index) => {
    console.log(arr[index]);
}

const myArray = [1, 2, 8, 'bee', 'last', 'first'];

indexAndPrint(myArray, 2);

// challenge 2
// Write a function that takes an array of something and tells you if the name 'Greg' is in that array

const isGregThere = (arr) => {
    const doesIncludeGreg = arr.includes('Greg');
    if (doesIncludeGreg) {
        return 'Yep, Greg\'s in there.';
    } else {
        return 'Nope, no Greg.';
    }
}

console.log(isGregThere(['a', 'b', 'Greg']));
console.log(isGregThere(['a', 'b', 'c']));


// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isItAPalindrome = (str) => {
    const arrayFromString = str.split('');
    const reversedArray = arrayFromString.reverse();
    const opposite = reversedArray.join('');

    // const opposite = str.split('').reverse().join('')

    if (str === opposite) {
        return true
    } else {
        return false
    }
}

console.log(isItAPalindrome('cat')); //false
console.log(isItAPalindrome('racecar')); //true
console.log(isItAPalindrome('mom')); //true
console.log(isItAPalindrome('bear')); //false
