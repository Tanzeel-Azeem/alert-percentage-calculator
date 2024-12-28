var obtainMarks = +prompt("Enter your obtained marks");
var totalMarks = +prompt("Enter total marks");

var percentage = (obtainMarks / totalMarks) * 100;

percentage = Math.round(percentage);

// alert(percentage + "%");

if (percentage >= 80) {

  alert(percentage + " " + "%" + "\n" + "Amazing! keep it up");

} else if (percentage >= 70) {

  alert(percentage + " " + "%" + "\n" + "Great! keep it up");

} else if (percentage >= 40) {

  alert(percentage + " " + "%" + "\n" + "Not Bad... Try Hard next time");

} else if (percentage < 40) {

  alert(percentage + " " + "%" + "\n" + "You Failed ... Go Die");

} else {
  alert("Please enter valid marks");
}
