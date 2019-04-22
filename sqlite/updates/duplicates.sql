DELETE FROM googleplaystore
WHERE rowid NOT IN(
	SELECT min(rowid)
	FROM googleplaystore
	GROUP BY app
)