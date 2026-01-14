
# Delete Duplicate Emails

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.
 

Write a solution to delete all duplicate emails, keeping only one unique email with the smallest id.

For SQL users, please note that you are supposed to write a DELETE statement and not a SELECT one.

For Pandas users, please note that you are supposed to modify Person in place.

After running your script, the answer shown is the Person table. The driver will first compile and run your piece of code and then show the Person table. The final order of the Person table does not matter.

The result format is in the following example.

 

Example 1:

Input: 
Person table:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Output: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
Explanation: john@example.com is repeated two times. We keep the row with the smallest Id = 1.


Solution


Problem Understanding
We need to remove duplicate emails from the Person table, keeping only one row per unique email - specifically the one with the smallest id.

``` sql

DELETE p1 
FROM Person p1
JOIN Person p2 
ON p1.email = p2.email AND p1.id > p2.id;

```


When the query runs:
For email john@example.com:

Row 1 (id=1) ↔ Row 3 (id=3)

Condition: p1.email = p2.email ✓ (both "john@example.com")

Condition: p1.id > p2.id ✗ (3 > 1 is true, so row 3 qualifies as p1)

Result: Row 3 gets deleted

For email bob@example.com:

Only one row exists, so no matches in the join

Nothing gets deleted

Final Table:


``` text
id | email
1  | john@example.com
2  | bob@example.com

```

Why This Works:
Preserves the smallest ID: By deleting rows where id > other_id, we keep the row with the smallest ID

Handles multiple duplicates: If there were 3+ duplicates (id=1, 4, 7), both id=4 and id=7 would be matched with id=1 and deleted

Leaves unique emails untouched: If an email appears only once, it won't match with any other row in the join


Alternative Way to Think About It:
You can read the query as:

"Delete from Person (as p1) all rows where there exists another row (p2) with the same email and a smaller id."


Edge Cases Considered:
✅ Handles any number of duplicates (2, 3, 10+)

✅ Preserves the minimum ID per email

✅ Leaves unique emails unchanged

✅ The self-join efficiently identifies all rows to delete in one operation

This solution is efficient and elegant because it handles all duplicates in a single DELETE statement without needing subqueries or temporary tables.