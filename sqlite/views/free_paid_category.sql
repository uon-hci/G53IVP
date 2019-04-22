CREATE VIEW free_paid_category AS
SELECT category, 
sum(case when type = 'Paid' Then 1 else 0 end) as paid,
sum(case when type = 'Free' Then 1 else 0 end) as free,
count(*) as total
FROM googleplaystore
GROUP BY category;