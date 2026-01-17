# Employees Earning More Than Their Managers

Table: Employee

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.
 

Write a solution to find the employees who earn more than their managers.

Return the result table in any order.

The result format is in the following example.

 

Example 1:

Input: 
Employee table:
+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
Output: 
+----------+
| Employee |
+----------+
| Joe      |
+----------+
Explanation: Joe is the only employee who earns more than his manager.

------------------------------------------------------------------------

## Solution


The first thing we want to do is look at the output. We can see that the column name is Employee. But there is no column in the original table with that name. So we know we have to rename it.

`SELECT name as Employee`

There's only one table we can use, so lets add that.
```sql 
SELECT name as Employee
FROM employee
```
Now, we know we have to compare internal values within the table. How do we do that? With an INNER JOIN of course! Think of it as creating a duplicate table.
``` sql
SELECT name as Employee
FROM employee e1 
INNER JOIN employee e2

```
Now here comes the tricky part. Looking at the employee table, we have to ask ourselves: who are the managers and who are the employees? (Hint: look at the managerID column). Thats right, Joe and Henry are employees, and Sam and Max are the managers. We need to somehow let our query know that Sam and Max are the managers. Let's do that by joining the ID column to the managerID column.

``` sql 
SELECT name as Employee
FROM employee e1
INNER JOIN employee e2 ON e1.id = e2.managerID

```
What did this do? It specified any e1 value as a manager value. The query looks at the tables and notices that the id's of 3 and 4 are also managerID values. Now that we know e1 are the managers, lets compare the salaries:

``` sql
SELECT name as Employee
FROM employee e1
INNER JOIN employee e2 ON e1.id = e2.managerID
WHERE e1.salary < e2.salary

```

We know that e1 are the managers, and e2 are the employees. Last step is to specify the column name in the SELECT clause (remember: e1 is manager and e2 is employee).
Let's do that now:

``` sql
SELECT e2.name as Employee
FROM employee e1
INNER JOIN employee e2 ON e1.id = e2.managerID
WHERE
e1.salary < e2.salary
```