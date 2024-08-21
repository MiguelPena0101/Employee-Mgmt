// server.js
const inquirer = require('inquirer');
const {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
} = require('./db/queries'); 

const mainMenu = async () => {
    const { choice } = await inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'Exit'
        ]
    });

    switch (choice) {
        case 'View All Departments':
            const departments = await getDepartments();
            console.table(departments);
            break;
        case 'View All Roles':
            const roles = await getRoles();
            console.table(roles);
            break;
        case 'View All Employees':
            const employees = await getEmployees();
            console.table(employees);
            break;
        case 'Add Department':
            await addDepartmentPrompt();
            break;
        case 'Add Role':
            await addRolePrompt();
            break;
        case 'Add Employee':
            await addEmployeePrompt();
            break;
        case 'Update Employee Role':
            await updateEmployeeRolePrompt();
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }

    
    mainMenu();
};

const addDepartmentPrompt = async () => {
    const { name } = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:'
    });

    await addDepartment(name);
    console.log(`Added department: ${name}`);
};

const addRolePrompt = async () => {
    const { title, salary, department_id } = await inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter the name of the role:'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the salary for this role:'
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'Enter the department ID for this role:'
        }
    ]);

    await addRole(title, salary, department_id);
    console.log(`Added role: ${title}`);
};

const addEmployeePrompt = async () => {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter the first name of the employee:'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter the last name of the employee:'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the role ID for this employee:'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Enter the manager ID for this employee (leave blank if none):'
        }
    ]);

    await addEmployee(first_name, last_name, role_id, manager_id);
    console.log(`Added employee: ${first_name} ${last_name}`);
};

const updateEmployeeRolePrompt = async () => {
    const { employee_id, new_role_id } = await inquirer.prompt([
        {
            name: 'employee_id',
            type: 'input',
            message: 'Enter the employee ID to update:'
        },
        {
            name: 'new_role_id',
            type: 'input',
            message: 'Enter the new role ID for this employee:'
        }
    ]);

    await updateEmployeeRole(employee_id, new_role_id);
    console.log(`Updated employee's role.`);
};

mainMenu();
