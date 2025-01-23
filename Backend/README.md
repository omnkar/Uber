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

# Captain Registration Endpoint

## POST /captains/register

This endpoint is used to register a new captain.

### Request

- Method: POST
- URL: `/captains/register`
- Headers: `Content-Type: application/json`
- Body:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "yourpassword",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

### Response

- Success: 
  - Status Code: `201 Created`
  - Body:
    ```json
    {
      "token": "jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
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
          "msg": "First name is required",
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
        },
        {
          "msg": "Color is required",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "Plate is required",
          "param": "vehicle.plate",
          "location": "body"
        },
        {
          "msg": "Capacity must be a number",
          "param": "vehicle.capacity",
          "location": "body"
        },
        {
          "msg": "Vehicle type must be car, motorcycle, or auto",
          "param": "vehicle.vehicleType",
          "location": "body"
        }
      ]
    }
    ```

### Notes

- The `lastname` field is optional.
- The `password` field will be hashed before storing in the database.

# Captain Login Endpoint

## POST /captains/login

This endpoint is used to log in a captain.

### Request

- Method: POST
- URL: `/captains/login`
- Headers: `Content-Type: application/json`
- Body:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

### Response

- Success: 
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "token": "jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
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
- Unauthorized:
  - Status Code: `401 Unauthorized`
  - Body:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

# Captain Logout Endpoint

## GET /captains/logout

This endpoint is used to log out an authenticated captain.

### Request

- Method: GET
- URL: `/captains/logout`
- Headers: `Authorization: Bearer <token>`

### Response

- Success: 
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- Unauthorized:
  - Status Code: `401 Unauthorized`
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

# User Profile Endpoint

## GET /users/profile

This endpoint is used to get the profile of an authenticated user.

### Request

- Method: GET
- URL: `/users/profile`
- Headers: `Authorization: Bearer <token>`

### Response

- Success: 
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "id": "12345",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com"
    }
    ```
- Unauthorized:
  - Status Code: `401 Unauthorized`
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

# User Logout Endpoint

## POST /users/logout

This endpoint is used to log out an authenticated user.

### Request

- Method: POST
- URL: `/users/logout`
- Headers: `Authorization: Bearer <token>`

### Response

- Success: 
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- Unauthorized:
  - Status Code: `401 Unauthorized`
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```
