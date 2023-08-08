//======== Dependencies===================//
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

//========== Connect Database ==========================//
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: " ", // Enter your password here
  database: "employeedb",
});

//========== Welcome Logo ==========================//
db.connect(function (err) {
  if (err) throw err;
  console.clear();
  console.log("");
  console.log("======================================");
  console.log("");
  console.log("           EMPLOYEE TRACKER           ");
  console.log("");
  console.log("       Created By: csetiawan88        ");
  console.log("");
  console.log("======================================");
  console.log("");
  mainMenu();
});

// Main Menu
// Function to display a list of prompts, user can select from them.

function mainMenu() {
  inquirer
    .prompt([
      {
        name: "choice",
        type: "list",
        message: "Please select an option:",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "View All Employees by Department",
          "View All Employees by Role",
          "View All Employees by Manager",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Exit Menu",
        ],
      },
    ])
    .then(function (result) {
      switch (result.choice) {
        // View departments
        case "View All Departments":
          viewAllDepts();
          break;

        // View all roles
        case "View All Roles":
          viewAllRoles();
          break;

        // View all employees
        case "View All Employees":
          viewAllEmps();
          break;

        // View all employees by department
        case "View All Employees by Department":
          viewEmpsByDept();
          break;

        // View all employees by role
        case "View All Employees by Role":
          viewEmpsByRole();
          break;

        // View all employees by manager
        case "View All Employees by Manager":
          viewEmpsByMan();
          break;

        // Add a department
        case "Add Department":
          addDept();
          break;

        // Add a role
        case "Add Role":
          addRole();
          break;

        // Add an employee
        case "Add Employee":
          addEmp();
          break;

        // Exit application
        case "Exit Menu":
          console.log("");
          console.log(
            "========================================================="
          );
          console.log("");
          console.log(
            "Thank you for using Employee Tracker and Have a nice day."
          );
          console.log("");
          console.log(
            "==================================================+======"
          );
          console.log("");
          db.end();
          break;
      }
    });
}

// View all departments
function viewAllDepts() {
  db.query(
    // "SELECT * FROM department",
    "SELECT department.id AS ID, department.name AS DEPARTMENT FROM department",
    function (err, res) {
      if (err) throw err;
      console.log("");
      console.clear();
      console.table(res);
      console.log("        All Departments are viewed!");
      console.log("        ---------------------------");
      mainMenu();
    }
  );
}

// View all roles
function viewAllRoles() {
  db.query(
    // "SELECT * FROM role",
    "SELECT role.id as ID, role.title AS TITLE, department.name AS DEPARTMENT, role.salary FROM role INNER JOIN department ON role.department_id = department.id ORDER BY role.id",
    function (err, res) {
      if (err) throw err;
      console.log("");
      console.clear();
      console.table(res);
      console.log("           All Roles are viewed!");
      console.log("           ---------------------");
      mainMenu();
    }
  );
}

// View all employees
function viewAllEmps() {
  db.query(
    // "SELECT * FROM employee",
    `SELECT employee.id,
    employee.first_name,
    employee.last_name,
    role.title AS title,
    department.name AS dept,
    role.salary,
    CONCAT(manager.first_name, ' ' ,manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    ORDER By employee.id`,
    function (err, res) {
      if (err) throw err;
      console.log("");
      console.clear();
      console.table(res);
      console.log("         All Employees are viewed!");
      console.log("         -------------------------");
      mainMenu();
    }
  );
}

// View all employees by role
function viewEmpsByRole() {
  db.query(
    "SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS NAME, role.title AS TITLE FROM employee INNER JOIN role on employee.role_id = role.id ORDER BY role.title",
    function (err, res) {
      if (err) throw err;
      console.log("");
      console.clear();
      console.table(res);
      console.log("      All Employees by role are viewed!");
      console.log("      ---------------------------------");
      mainMenu();
    }
  );
}

// View all employees by department
function viewEmpsByDept() {
  db.query(
    "SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS NAME, department.name AS DEPT FROM role INNER JOIN employee on employee.role_id = role.id INNER JOIN department on department.id = role.department_id ORDER BY department.name",
    function (err, res) {
      if (err) throw err;
      console.log("");
      console.clear();
      console.table(res);
      console.log(" All Employees by department are viewed!");
      console.log(" ---------------------------------------");
      mainMenu();
    }
  );
}

// View all employees by manager
function viewEmpsByMan() {
  db.query(
    "SELECT CONCAT(Emp.first_name, ' ', Emp.last_name) AS EMPLOYEE, CONCAT(Man.first_name, ' ', Man.last_name) AS MANAGER FROM Employee Emp INNER JOIN Employee Man on Emp.manager_id = Man.id ORDER BY Emp.last_name",
    function (err, res) {
      if (err) throw err;
      console.log("");
      console.clear();
      console.table(res);
      console.log("    All Employees by manager are viewed!");
      console.log("    ------------------------------------");
      mainMenu();
    }
  );
}

// Questions for adding department
function addDept() {
  inquirer
    .prompt([
      {
        name: "newDept",
        type: "input",
        message: "Please enter the name of the department?",
        // validation for empty field
        validate(input) {
          if (input !== "") return true;
          throw Error("The field cannot be empty.");
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO department (name)
                VALUES (?)`;
      const params = [answer.newDept];
      db.query(sql, params, function (err, res) {
        if (err) throw err;
        console.clear();
        console.log("Department Inserted!");
        viewAllDepts();
        mainMenu();
      });
    });
}

// Questions for adding role
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Please enter the title of role?",
        // validation for empty field
        validate(input) {
          if (input !== "") return true;
          throw Error("The field cannot be empty.");
        },
      },
      {
        name: "salary",
        type: "number",
        message: "Please enter the salary associated with the role?",
        // validation numeric field
        validate(input) {
          if (Number.parseInt(input)) return true;
          throw Error("Please input a number.");
        },
      },
      {
        name: "department_id",
        type: "list",
        message: "Please enter the department's id associated with the role?",
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        // validation numeric field
        validate(input) {
          if (Number.parseInt(input)) return true;
          throw Error("Please input a number.");
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO role (title, salary, department_id)
                VALUES (?, ?, ?)`;
      const params = [answer.title, answer.salary, answer.department_id];
      db.query(sql, params, function (err, res) {
        if (err) throw err;
        console.clear();
        console.log("Role Inserted!");
        viewAllRoles();
        mainMenu();
      });
    });
}

// Questions for adding employee
function addEmp() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Please enter the first name of employee?",
        // validation for validation empty field
        validate(input) {
          if (input !== "") return true;
          throw Error("The field cannot be empty.");
        },
      },
      {
        name: "last_name",
        type: "input",
        message: "Please enter the last name of employee?",
        // validation for validation empty field
        validate(input) {
          if (input !== "") return true;
          throw Error("The field cannot be empty.");
        },
      },
      {
        name: "role_id",
        type: "list",
        message: "Please enter the role id associated with the employee?",
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        // validation numeric field
        validate(input) {
          if (Number.parseInt(input)) return true;
          throw Error("Please input a number.");
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id)
                VALUES (?, ?, ?)`;
      const params = [answer.first_name, answer.last_name, answer.role_id];
      db.query(sql, params, function (err, res) {
        if (err) throw err;
        console.clear();
        console.log("New Employee Inserted!");
        viewAllEmps();
        mainMenu();
      });
    });
}
