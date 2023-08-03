# Module 12 Challenge

# SQL Challenge: Employee Tracker

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation

This application requires Node.js, Inquirer, console.table and mysql2. To start application run `npm start`. To view database from MySQL run `mysql -u root -p`.

## Usage

1. Run npm init -y to create a new .json file
2. npm i
3. npm i inquirer
4. npm i mysql2
5. npm i console.table
6. run `mysql -u root -p`.
7. Make sure schema.sql and seeds.sql run
8. run node index.js
9. Follow the prompts

## Contributing

N/A

## Test

```
Testing of this application is shown in the Walkthrough Video.
```

## Walkthrough Video

Video created with Screencastify.

Video Link:

## Technologies

- [MySQL](https://www.mysql.com/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [npmjs](https://docs.npmjs.com/)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Questions

If you have any additional questions, you can reach me at:
csetiawan@yahoo.com

## Github

https://github.com/csetiawan88/employeetracker