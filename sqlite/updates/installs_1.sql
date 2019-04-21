UPDATE googleplaystore
SET installs = substr(installs, 1, length(installs) - 1)
WHERE installs LIKE '%+'