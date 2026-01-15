

/*
should use a WHERE condition at the end, we need to check if a day hads larger temp than previouse day

WHERE id p1.temperature < p2.temperature

When we compare rows in same column we can use self join

we need a JOIN

we join on id

ON p1.id = p2.id

for SELECT we only show the id with the higher temperature than prev

Altogether something like this:

SELECT w2.id
FROM Weather w1
JOIN Weather w2
ON w1.id = w2.id
WHERE id w1.temperature < w2.temperature

This is wrong becacuse it could never be true  because temps are always equal, if the join is on id


JOIN based on date relationship

We could use this to compare the dates:

ON w1.recordDate = w2.recordDate - INTERVAL 1 DAY


this ensures the date are the next one



*/


SELECT w2.id
FROM Weather w1
JOIN Weather w2
ON w1.recordDate = w2.recordDate - INTERVAL 1 DAY
WHERE w1.temperature < w2.temperature;
