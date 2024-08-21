# Employee Management System

## Description
To view this project functioning please click [HERE](https://bootcampspot.instructuremedia.com/embed/f16cec68-1043-48d3-84d7-ce8af0699c66)

The Employee Management System is a command-line application built with Node.js, Inquirer, and PostgreSQL. It allows business owners to manage departments, roles, and employees within their company by providing an interface to view, add, and update information in an employee database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Resources](#resources)

## Installation

To install and set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:MiguelPena0101/Employee-Mgmt.git
   cd Employee-Mgmt

2. **Install Dependencies**
 ```bash
   npm i 
``` 
3. **Set Up .ENV**

    - Ensure that you have added your credentials to a .env file.

4. **Launching PostgreSQL**
    ```bash
     cd .\db
        psql -U username
        Enter password
        \i schema.sql and then \i seeds.sql
    ```
5. **Launching Server.js**
    ```bash
        node server.js
    ```

## Usage

Upon running the application, you will be presented with a menu of options to manage your company's departments, roles, and employees:

- **View All Departments:** Displays a list of all departments with their IDs.
- **View All Roles:** Shows the roles available in the company, along with their IDs, department, and salary.
- **View All Employees:** Displays a table with all employee details, including their IDs, names, job titles, departments, salaries, and managers.

## Resources

Here are some resources that helped me in creating this project:

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [Inquirer.js Documentation](https://www.npmjs.com/package/inquirer)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Using PostgreSQL with Node.js](https://node-postgres.com/)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)