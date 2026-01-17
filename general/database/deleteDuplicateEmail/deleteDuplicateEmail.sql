/*

start with DELETE

emails are in Person table

I could make an alias like this Person p

so it will be like

DELETE p.emails

I need a WHERE statement for when p.emails has same id

but how to check if p.emails equal eachother?

to find multiples of something we can use aggragat COUNT

something like this ...


GROUP BY p.emails
HAVING COUNT(*) > 1;


DELETE 

p.email 
FROM Person p

GROUP BY p.email
HAVING COUNT(*) > 1;


*/

DELETE p1 FROM Person p1
JOIN Person p2 
ON p1.email = p2.email AND p1.id > p2.id;
