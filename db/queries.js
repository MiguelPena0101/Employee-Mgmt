const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

const getDepartments = async () => {
    const result = await pool.query('SELECT * FROM department');
    return result.rows;
};

const getRoles = async () => {
    const query = `
    SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    INNER JOIN department ON role.department_id = department.id
    `;
    const result = await pool.query(query);
    return result.rows;
};

const getEmployees = async () => {
    const query = `
    SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, 
           manager.first_name AS manager_first_name, manager.last_name AS manager_last_name
    FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    `;
    const result = await pool.query(query);
    return result.rows;
};



module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
};