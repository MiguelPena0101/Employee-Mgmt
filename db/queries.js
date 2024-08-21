const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});


const addDepartment = async (name) => {
    const query = 'INSERT INTO department (name) VALUES ($1) RETURNING *';
    const values = [name];
    const result = await pool.query(query, values);
    return result.rows[0];
};


const addRole = async (title, salary, department_id) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *';
    const values = [title, salary, department_id];
    const result = await pool.query(query, values);
    return result.rows[0];
};


const addEmployee = async (first_name, last_name, role_id, manager_id) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [first_name, last_name, role_id, manager_id || null];
    const result = await pool.query(query, values);
    return result.rows[0];
};


module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
};