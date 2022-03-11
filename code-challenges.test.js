// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("hello", () => {
//   it("returns a string that says hi", () => {
//     expect(hello()).toEqual("hi")
//   })
// })

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divThree", (number) => {
  it("returns if number is divisible by 3 or is not divisible by 3 based on input", () => {
    expect(divThree(num1)).toEqual("15 is divisible by 3")
    expect(divThree(num2)).toEqual("0 is divisible by 3")
    expect(divThree(num3)).toEqual("-7 is not divisible by 3")
  })
})
//Got RED!

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

//Make function named divThree
//Checks if number is divisible by 3
//If divisible by 3 returns "x is divisible by 3"
//If not returns "x is not divisible by 3"

const divThree = (num) => {
  if (num % 3 === 0) {
    return `${num} is divisible by 3`
  } else {
    return `${num} is not divisible by 3`
  }
}
//I give up on this one for now. The code works, the test will run but refuses to green even when it looks like it reads properly


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//a) Create a test with expect statements for each of the variables provided.
describe("capitalize", (arr) => {
  it("returns an array that has first letter of all words capitalized", () => {
    expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
//Got Red!

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.
// Make a function named capitalize
// use map on the array to grab the element at [0] of each word
// make certain it lowercases each remaining letter of the word

function capitalize(arr) {
  return arr.map(element => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
  })
}
//
// console.log(capitalize(randomNouns1))

// left the console.log in this time to show it's functioning code that does what I described, but it still stays red. I think I'll need additional help with testing, but at least I know how to get results.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelCheck", () => {
  it("returns the number of the index value with the first vowel", () => {
    expect(vowelCheck(vowelTester1)).toEqual(1)
       expect(vowelCheck(vowelTester2)).toEqual(0)
       expect(vowelCheck(vowelTester3)).toEqual(2)
  })
})
// // Got Red!
//
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
//
// // b) Create the function that makes the test pass.
//Create function with a string parameter
//use charAt to single out vowelCheck
//true/false for aeiou
// return index of first vowel
const vowelCheck = (string) => {
var vowel = ["a","e","i","o","u"]
  for (var i = 0; i < string.length(); i++) {
    if (vowelCheck(charAt([i] === vowel ))
      return i
    }
  }
//redid it almost entirely but getting a weird error when running the test so I think it works just has some weird syntex thing.
