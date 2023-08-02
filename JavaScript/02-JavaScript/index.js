let firstName = prompt("Insert a name").toLowerCase();
let bodyElement = document.querySelector(`body`);

let students = [
  ["antonio", true, 5],
  ["marija", false],
  ["darko", true, 3],
  ["stefan", false],
  ["teodora", true, 4],
  ["ivona", true, 5],
  ["marko", true, 4],
  ["aleksandar", false],
  ["andrej", true, 1],
];

function checkStudents(checkName) {
  let nameFound = false;
  for (let i = 0; i < students.length; i++) {
    if (checkName === students[i][0] && students[i][1] === true) {
      bodyElement.innerHTML = `<table style="width: 50%;height: 30vh;border: 3px solid black;border-collapse: collapse;"> <tr> <td style="border: 3px solid black; font-size: 50px; text-align: center"> ${checkName} </td> <td style="border: 3px solid black; font-size: 50px; text-align: center">Voted</td> <td style="border: 3px solid black; font-size: 50px; text-align: center">${students[i][2]}</td> </tr></table>`;
      nameFound = true;
      return;
    } else if (checkName === students[i][0] && students[i][1] === false) {
      bodyElement.innerHTML = `<table style="width: 50%;height: 30vh;border: 3px solid black;border-collapse: collapse;"> <tr> <td style="border: 3px solid black; font-size: 50px; text-align: center"> ${checkName} </td> <td style="border: 3px solid black; font-size: 50px; text-align: center">Didn't vote</td></tr></table>`;
      nameFound = true;
      return;
    }
  }
  if (!nameFound) {
    bodyElement.innerHTML = `<h1>There is no student with name ${firstName} in this class`;
  }
}

checkStudents(firstName);
