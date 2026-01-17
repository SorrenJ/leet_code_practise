/*

I output an employee > manager

to do that i must filter managerId = null 

so only managerId would only be selected

if managerId == null && employee > manager

so in order to find the manager i must find the highest payed manager. I cant just compare Henry, i have to create a function

I can use MAX() to find highest salary of a manager

SELECT MAX (salary) FROM Employee.managerId 

okay how to put this together?

So first we need to grab the highest manager

so 

managerId = True && MAX (salary) AS largeManager

Now 

largeManager < salary

SELECT name
----------------------------------------
Altogether

SELECT name
FROM Employee
GROUP BY Salary
managerId = True && MAX (salary) AS largeManager
WHERE largeManager < salary && managerId  = null;

*/


SELECT e.name AS Employee
FROM Employee e
INNER JOIN Employee m ON e.managerId = m.id
WHERE e.salary > m.salary;