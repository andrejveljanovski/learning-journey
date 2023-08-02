class Abstract {
  constructor(_name, _company, _salary) {
    this.name = _name;
    this.company = _company;
    this.salary = _salary;
  }
}

let employes = [];
let directors = [];
let bosses = [];

let div = document.querySelector("#results");
let list = document.createElement("ul");
div.append(list);

let surveySubmit = document.querySelector("#submit");
const surveyHandler = (e) => {
  e.preventDefault();

  let fullname = document.querySelector("#name").value;
  let company = document.querySelector("#company").value;
  let job = document.querySelector("#position").value;
  let salary = document.querySelector("#salary").value;

  if (
    job === "" ||
    fullname.length < 8 ||
    company.length < 4 ||
    salary < 1200
  ) {
    alert("invalid input");
  }

  // /////////////////////
  else {
    if (job === "Director") {
      class Direcor extends Abstract {
        constructor(name, company, salary) {
          super(name, company, salary);
          this.job = "Director";
        }
      }
      let director = new Direcor(fullname, company, salary);
      directors.push(director);
      list.innerHTML += `Name: ${director.name}, Company ${director.company}, Job: Director, Salary: ${director.salary} <br/>`;
    }

    // /////////////////////////
    else if (job === "Emloyee") {
      class Employee extends Abstract {
        constructor(name, company, salary) {
          super(name, company, salary);
          this.job = "Employee";
        }
      }
      let employee = new Employee(fullname, company, salary);
      employes.push(employee);
      list.innerHTML += `Name: ${employee.name}, Company ${employee.company}, Job: Employee, Salary: ${employee.salary} <br/>`;
    }

    // /////////////////////////
    else {
      class Boss extends Abstract {
        constructor(name, company, salary) {
          super(name, company, salary);
          this.job = "Boss";
        }
      }
      let boss = new Boss(fullname, company, salary);
      bosses.push(boss);
      list.innerHTML += `Name: ${boss.name}, Company ${boss.company}, Job: Boss, Salary: ${boss.salary} <br/>`;
    }
  }

  document.querySelector("#name").value = "";
  document.querySelector("#company").value = "";
  document.querySelector("#position").value = "";
  document.querySelector("#salary").value = "";
};

surveySubmit.addEventListener("click", surveyHandler);
