-- Change all values in format {size}k to {size/1000}
UPDATE googleplaystore
SET size = cast(substr(size, 1, length(size) - 1) AS int) / 1000
WHERE size LIKE '%k'