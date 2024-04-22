### Endpoints used
1. GET http://localhost:3000/api/authors
2. GET http://localhost:3000/api/books

# Manual Test 1: Authors

## Test Case
"Verify that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request."

## Test Steps
1. Send a GET request to `http://localhost:3000/api/authors`.
2. Expect status code: `200 OK`.

## Expected Results
- The response status code should be `200 OK`.

## Actual Test Results for Authors Endpoint
- **Status Code**: `200 OK`
- **Response Time**: `17 ms`
- **Response Body**: As expected. Below is a snippet of the JSON response:
  ```json
  {
      "_id": "6624f696211bb9bad5be0ce1",
      "authorId": 1,
      "firstName": "Quintin",
      "lastName": "Ganforthe",
      "__v": 0
  }

### Test Details in Postman
- **Name of Test**: GET 1. Authors
- **Location**: Books_API > Manual testing > Test 01 > GET 1. Authors

---

# Manual Test 1: Books

## Test Case
"Verify that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request."

## Test Steps
1. Send a GET request to `http://localhost:3000/api/books`.
2. Expect status code: `200 OK`.

## Expected Results
- The response status code should be `200 OK`.

### Actual Test Results
- **Status Code**: `200 OK`
- **Response Time**: `94 ms`
- **Response Body**: Matches the expected schema. Here is an example of the data returned:
  ```json
  {
      "_id": "6624f696211bb9bad5be0d47",
      "title": "Science Fiction",
      "authorId": 80,
      "publicationDate": "1968-01-04T00:00:00.000Z",
      "info": "Set in a futuristic world, this story delves into advanced technologies and existential questions. The plot is engaging and thought-provoking, suitable for all fans of the genre.",
      "rating": 3,
      "__v": 0
  }

### Test Details in Postman
- **Name of Test**: GET 1. Books
- **Location**: Books_API > Manual testing > Test 01 > GET 1. Books

---

# Manual Test 2: Authors

## Test Case
"Check if the API returns the expected data format (e.g., JSON, XML) in the response."

## Test Steps
1. Send a GET request to the respective endpoint.
2. Verify the `Content-Type` header in the response.
3. Inspect the response body to confirm it matches the expected format.

## Expected Results
- The `Content-Type` header should be `application/json`.
- The response body should be in JSON format.

### Actual Test Results
- **Content-Type Header**: `application/json; charset=utf-8`
- **Response Body Format**: Confirmed as JSON.
- **Status Code**: `200 OK`
- **Response Time**: `18 ms`
- **Response Body**: Matches the expected schema. Here is an example of the data returned:
  ```json
    {
        "_id": "6624f696211bb9bad5be0ce1",
        "authorId": 1,
        "firstName": "Quintin",
        "lastName": "Ganforthe",
        "__v": 0
    },

### Test Details in Postman
- **Name of Test**: GET 2. Authors
- **Location**: Books_API > Manual testing > Test 02 > GET 02. Authors

---

# Manual Test 2: Books

## Test Case
"Check if the API returns the expected data format (e.g., JSON, XML) in the response."

## Test Steps
1. Send a GET request to the respective endpoint.
2. Verify the `Content-Type` header in the response.
3. Inspect the response body to confirm it matches the expected format.

## Expected Results
- The `Content-Type` header should be `application/json`.
- The response body should be in JSON format.

### Actual Test Results
- **Content-Type Header**: `application/json; charset=utf-8`
- **Response Body Format**: Confirmed as JSON.
- **Status Code**: `200 OK`
- **Response Time**: `417 ms`
- **Response Body**: Matches the expected schema. Here is an example of the data returned:
  ```json
    {
        "_id": "6624f696211bb9bad5be0d47",
        "title": "Science Fiction",
        "authorId": 80,
        "publicationDate": "1968-01-04T00:00:00.000Z",
        "info": "Set in a futuristic world, this story delves into advanced technologies and existential questions. The plot is engaging and thought-provoking, suitable for all fans of the genre.",
        "rating": 3,
        "__v": 0
    },

### Test Details in Postman
- **Name of Test**: GET 2. Books
- **Location**: Books_API > Manual testing > Test 02 > GET 02. Books
