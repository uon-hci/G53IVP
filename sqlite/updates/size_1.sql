-- Change all values in format {size}M to {size}
UPDATE googleplaystore
SET size = substr(size, 1, length(size) - 1)
WHERE size LIKE '%M'