DELETE FROM googleplaystore_user_reviews
WHERE rowid NOT IN(
	SELECT min(rowid)
	FROM googleplaystore_user_reviews
	GROUP BY app, translated_review
)