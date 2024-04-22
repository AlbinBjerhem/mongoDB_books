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
The response status code should be `200 OK`.

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
- **Location**: Books_API > Manual testing > Test 1 > GET 1. Authors

---

# Manual Test 1: Books

## Test Case
"Verify that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request."

## Test Steps
1. Send a GET request to `http://localhost:3000/api/books`.
2. Expect status code: `200 OK`.

## Expected Results
The response status code should be `200 OK`.

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
- **Location**: Books_API > Manual testing > Test 1 > GET 1. Books

---

# Manual Test 2: Authors


