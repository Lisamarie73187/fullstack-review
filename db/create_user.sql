INSERT INTO users_fullstack_auth (auth0_id, email, pictureURL, name)
VALUES ($1, $2, $3, $4)
RETURNING *;