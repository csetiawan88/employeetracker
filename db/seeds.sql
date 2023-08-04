INSERT INTO department (name) VALUES 
("Finance"),
("Sales"),
("Operations"),
("Technical"),
("HR");

-- Roles Data
INSERT INTO role (title, salary, department_id) VALUES 
("Account Payable", 100000, 1),
("Account Receivables", 100000, 1),
("Sales Reps", 120000, 2),
("Sales Manager", 130000, 2),
("External Op Manager", 110000, 3),
("Internal Op Manager", 110000, 3),
("Senior Technical", 150000, 4),
("Junior Technical", 125000, 4),
("HR Manager", 95000, 5),
("HR Admin", 80000, 5);

-- Employees Data
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Bill", "Mcdonald", 4, NULL),
("Phil", "Cape", 3, 1),
("Peter", "Mac", 1, NULL),
("Bruce", "Wor", 2, 3),
("Melissa", "Well", 7, NULL),
("Elisa", "How", 8, 5),
("Steve", "Shar", 7, NULL),
("Tane", "Pak", 8, 7),
("Troy", "Smit", 6, 1),
("Evan", "Bar", 5, NULL);
