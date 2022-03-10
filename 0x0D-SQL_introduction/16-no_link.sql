-- show names and score only if have score
SELECT score, name FROM second_table WHERE name IS NOT NULL ORDER BY score DESC;
