-- Write your MySQL query statement below

-- I have to find the customers not in Orders table

-- in Order table find customerId not present 

-- I use like to search for ids that are left behind and not in Orders table


-- I join the table and make and alias called Customers

-- you need to get customerId and JOIN it with the ids in customer

SELECT
c.name as Customers

FROM Customers c

LEFT JOIN Orders o ON c.id = o.customerId
WHERE o.customerId IS NULL;