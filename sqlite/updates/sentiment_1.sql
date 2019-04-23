UPDATE googleplaystore_user_reviews
SET sentiment = 'positive'
WHERE sentiment = 'Positive';

UPDATE googleplaystore_user_reviews
SET sentiment = 'negative'
WHERE sentiment = 'Negative';

UPDATE googleplaystore_user_reviews
SET sentiment = 'neutral'
WHERE sentiment = 'Neutral';