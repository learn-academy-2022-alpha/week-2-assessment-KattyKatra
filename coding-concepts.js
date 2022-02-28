// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: ["A","l","p","h","a"," ","2","0","2","2"]
// b) Verify and explain: ["A","l","p","h","a"," ","2","0","2","2"] .split("") separates each index in the array with ""


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello LEARN Student
// b) Verify and explain: undefined. I didn't look close enough initially. It's lacking a return in the function.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain: [8,10,12,14,16], .map grabs each value and multiplies it by 2 while keeping array length in this case


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11,13,15]
// b) Verify and explain: [11,13,15] .filter is running each value to see if it divides by 2 and filters out the ones that don't into a new array


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: JavaScript, the log is looking into myCodingSkills, looking into langauges, and returning index[0]


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn {student:"George", cohort: "Alpha", year: "2022" }
// b) Verify and explain: Learn { student: 'George', cohort: 'Alpha', year: 2022 }, it's calling the whole class this time so it's adding George to this.student and returning cohort and year as well
