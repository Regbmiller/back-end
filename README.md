# back-endApi hosted at: 



Backend
Description
This is the back end for a outdoor fittness app. It's hard to keep track of outdoor classes taking place aroudn town and our app solves that by compiling these classes in one convenient place.

Endpoints
Method Endpoint Description

POST /auth/register Creates a user using the information sent inside the body of the request. password is hashed before saving the user to the database.
POST /auth/login Uses the credentials sent inside the body to authenticate the user. On successful login creates a new JWT with the user id as the subject and sends it back to the client. If login
    fails, respond with the correct status code.
GET /categories On successful authorization, it responds with an array of all the categories. If the user is not logged in it responds with the correct status code.
GET /categories/:id On successful authorization, it responds with an array of the specified category.If the user is not logged in it responds with the correct status code.
POST /categories On successful authorization, it adds the category to the users database. If the user is not logged in, or if the category schema isn't correct, it responds with the appropriate   status code.
DELETE /categories/:id On successful authorization, it deletes the specifed category. If the user is not logged in, or if the category id isn't correct, it responds with the appropriate status code.
PUT /categories/:id On successful authorization, it updates the category with provided data. If the user is not logged in, or if the category schema isn't correct, it responds with the appropriate status code.

GET /classes On successful authorization, it responds with an array of all the classes. If the user is not logged in it responds with the correct status code.
GET /classes/:id On successful authorization, it responds with an array of the specified classes.If the user is not logged in it responds with the correct status code.
POST /classes On successful authorization, it adds the classes to the users database. If the user is not logged in, or if the classes schema isn't correct, it responds with the appropriate status code.
DELETE /classes/:id On successful authorization, it updates the classes with provided data. If the user is not logged in, or if the classes schema isn't correct, it responds with the appropriate status code. PUT /classes/:id On successful authorization, it updates the classes with provided data. If the user is not logged in, or if the classes schema isn't correct, it responds with the appropriate status code.

GET /users On successful authorization, it responds with an array of all the users. If the user is not logged in it responds with the correct status code.
GET /users/:id On successful authorization, it responds with an array of the specified user.If the user is not logged in it responds with the correct status code.
POST /users On successful authorization, it adds the user to the users database. If the user is not logged in, or if the user schema isn't correct, it responds with the appropriate status code.
DELETE /users/:id On successful authorization, it updates the user with provided data. If the user is not logged in, or if the user schema isn't correct, it responds with the appropriate status code.
PUT /users/:id On successful authorization, it updates the user with provided data. If the user is not logged in, or if the user schema isn't correct, it responds with the appropriate status code.
