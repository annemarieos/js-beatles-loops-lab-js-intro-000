<<<<<<< HEAD
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts
}
=======
// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//
// function theBeatlesPlay(musicians, instruments) {
//   var array = [];
//   for (let i = 0; i < 4; i++) {
//     array.push(`${musicians[i]} plays ${instruments[i]}`)
//   }
//   return array;
// }
//
// function johnLennonFacts() {
//   var facts = ["He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"]
//   var newFacts = []
//   var i = 0
//   while (i < facts.length) {
//     newFacts.push(facts[i] + "!!!")
//   }
//   return newFacts
// }
>>>>>>> b40de578f4df2d498e5ee0086e22e050b4b4efb6

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15)

  return array
}
