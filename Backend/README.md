# User Registration Endpoint

## POST /users/register

This endpoint is used to register a new user.

### Request

- Method: POST
- URL: `/users/register`
- Headers: `Content-Type: application/json`
- Body:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

### Response

- Success: 
  - Status Code: `201 Created`
  - Body:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```
- Validation Error:
  - Status Code: `400 Bad Request`
  - Body:
    ```json
    {
      "errors": [
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Enter a valid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be at least 5 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

### Notes

- The `lastname` field is optional.
- The `password` field will be hashed before storing in the database.
