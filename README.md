# Module 12 Challenge

# SQL Challenge: Employee Tracker

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

## Criteria

- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database
- Uses the Inquirer packageLinks to an external site..
- Uses the MySQL2 packageLinks to an external site. to connect to a MySQL database.
- Follows the table schema outlined in the homework instructions.

## Completed

- View All Departments
- View All Roles
- View All Employees
- View All Employees by Department (Bonus)
- View All Employees by Role (Bonus)
- View All Employees by Manager (Bonus)
- Add Department
- Add Role
- Add Employee
- Exit Menu
- Uses the Inquirer packageLinks to an external site = "inquirer": "^8.2.6",
- Uses the MySQL2 packageLinks to an external site. to connect to a MySQL database = "mysql2": "^3.5.2"

## Future Development

- Update employee managers
- Delete departments, roles, and employees
- View the total utilized budget of a department—in other words, the combined salaries of all employees in that department

## Installation

- This application requires Node.js, Inquirer, console.table and mysql2.
- To start application run `node index`.
- To view database from MySQL run `mysql -u root -p`.

## Usage

1. Run npm init -y to create a new .json file
2. npm i
3. npm i inquirer
4. npm i mysql2
5. npm i console.table
6. run `mysql -u root -p`. Enter your password.
7. Make sure schema.sql and seeds.sql run
8. run node index.js
9. Follow the prompts

## Contributing

csetiawan88 - https://github.com/csetiawan88/

## Test

Testing is shown in the Walkthrough Video.

## Walkthrough Video

Video created with Screencastify.

Video Link: https://drive.google.com/file/d/1iKZbIpriK2EbpNE5bZDJHudc4DH6cFQG/view

## Screenshot

![Employee Tracker](screenshot1.jpg)
![Employee Tracker](screenshot2.jpg)
![Employee Tracker](screenshot3.jpg)

## Technologies

- [MySQL](https://www.mysql.com/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [npmjs](https://docs.npmjs.com/)
- [inquirer](https://www.npmjs.com/package/inquirer)
- Console Table

## Github

GITHUB: https://github.com/csetiawan88/employeetracker

## Questions

If you have any additional questions, you can reach me at:
csetiawan@yahoo.com
