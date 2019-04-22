UPDATE googleplaystore
SET genre = upper(genre);

UPDATE googleplaystore
SET genre = replace(genre, ' & ', '_AND_');