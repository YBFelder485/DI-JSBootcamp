SELECT first_name AS "First", last_name AS "Last" FROM employees;

SELECT DISTINCT department_id FROM employees;

SELECT * FROM employees ORDER BY first_name DESC;

SELECT first_name, last_name, salary, ROUND(salary*0.15) AS PF FROM employees;

SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary ASC;

SELECT SUM(salary) FROM employees;

SELECT MAX(salary), MIN(salary) FROM employees;

SELECT AVG(salary) FROM employees;

SELECT COUNT(*)) FROM employees;

SELECT UPPER(first_name) FROM employees;

SELECT LEFT(first_name, 3) FROM employees;

SELECT CONCAT(first_name, ' ', last_name) FROM employees;

SELECT first_name, last_name, LENGTH(CONCAT(first_name, ' ', last_name)) FROM employees;

SELECT first_name FROM employees WHERE first_name ~ '\d';

SELECT first_name FROM employees LIMIT 10;



SELECT first_name, last_name, salary FROM employees WHERE salary > 10000 AND salary < 15000;

SELECT first_name, last_name, hire_date FROM employees WHERE hire_date >= '1987-01-01' AND hire_date <= '1987-12-31';

SELECT first_name, last_name FROM employees WHERE first_name ILIKE '%c%e%';

SELECT * FROM employees LEFT JOIN jobs ON employees.job_id=jobs.job_id WHERE jobs.job_title='Programmer' OR jobs.job_title='Shipping Clerk' AND employees.salary!=4500 AND employees.salary!=10000 AND employees.salary!=15000;

SELECT last_name FROM employees WHERE LENGTH(employees.last_name)=6;

SELECT last_name FROM employees WHERE POSITION('e' IN last_name)=3;

SELECT DISTINCT jobs.job_title FROM employees LEFT JOIN jobs ON employees.job_id=jobs.job_id;

SELECT * FROM employees WHERE last_name='Jones' OR last_name='Blake' OR last_name='Scott' OR last_name='King' OR last_name='Ford';