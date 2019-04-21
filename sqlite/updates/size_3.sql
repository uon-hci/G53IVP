-- Change all values non int to NaN
UPDATE googleplaystore
SET size = 'NaN'
WHERE size = 'Varies with device'