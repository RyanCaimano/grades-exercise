// The situation is as follows: Write the code that generates a test score that is a whole number in the range [0,100] and that returns/prints a message with the corresponding letter grade
var testGrade = Math.floor(Math.random() * 100);
    console.log(testGrade);

if (testGrade >= 0 && testGrade <= 59) {
    console.log('You earned an F');
}   else if (testGrade >= 60 && testGrade <= 69) {
    console.log('You earned a D');
}   else if (testGrade >= 70 && testGrade <= 79) {
    console.log('You earned a C');
}   else if (testGrade >= 80 && testGrade <= 89) {
    console.log('You earned a B');
}   else {
    console.log('You earned an A');
}
