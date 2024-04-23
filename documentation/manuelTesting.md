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

---

# Manual Test 3: Authors

## Test Case
"Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request."

## Test Steps
1. Send a GET request to a non-existent endpoint, such as `http://localhost:3000/api/authors/bad`.
2. Expect status code: `404 Not Found`.

## Expected Results
- The response status code should be `404 Not Found`.

### Actual Test Results
- **Status Code**: `404 Not Found`
- **Response Time**: `592 ms`
- **Response Body**: Contains a message indicating the endpoint was not found.

### Test Details in Postman
- **Name of Test**: GET 3. Authors
- **Location**: Books_API > Manual testing > Test 03 > GET 3. Authors

---

# Manual Test 3: Books

## Test Case
"Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request."

## Test Steps
1. Send a GET request to a non-existent endpoint, such as `http://localhost:3000/api/books/bad`.
2. Expect status code: `404 Not Found`.

## Expected Results
- The response status code should be `404 Not Found`.

### Actual Test Results
- **Status Code**: `404 Not Found`
- **Response Time**: `587 ms`
- **Response Body**: Contains a message indicating the endpoint was not found.

### Test Details in Postman
- **Name of Test**: GET 3. Books
- **Location**: Books_API > Manual testing > Test 03 > GET 3. Books

---

# Manual Test 4: Authors

## Test Case
"Test if the API returns the correct data when querying with specific filters or search criteria."

## Test Steps
1. Send a GET request to /api/authors with the query parameter firstName=Quintin.
2. Expect status code: 200 OK.
3. Inspect the response body to confirm that only authors with the first name "Quintin" are returned.

## Expected Results
- The response status code should be 200 OK.
- The response body should contain authors with the first name "Quintin".

### Actual Test Results
- **Status Code**: `200 OK`
- **Response Time**: `18 ms`
- **Response Body**: Contains authors with the first name "Quintin".

### Test Details in Postman
- **Name of Test**: GET 4. Authors
- **Location**: Books_API > Manual testing > Test 04 > GET 4. Authors

---

# Manual Test 4: Books

## Test Case
"Test if the API returns the correct data when querying with specific filters or search criteria."

## Test Steps
1. Send a GET request to /api/books with the query parameter title=Science Fiction.
2. Expect status code: 200 OK.
3. Inspect the response body to confirm that only books with the title "Science Fiction" are returned.

## Expected Results
- The response status code should be 200 OK.
- The response body should contain books with the title "Science Fiction".

### Actual Test Results
- **Status Code**: `200 OK`
- **Response Time**: `59 ms`
- **Response Body**: Contains books with the title "Science Fiction".

### Test Details in Postman
- **Name of Test**: GET 4. Books
- **Location**: Books_API > Manual testing > Test 04 > GET 4. Books

---

# Manual Testing 5: Authors

## Test Case 
"Verify that the API returns paginated results when a large number of records are requested."

## Test Steps
1. Send a GET request to /api/authors with query parameters page=1 and limit=10.
2. Expect status code: 200 OK.
3. Verify that the response body contains only 10 authors.
4. Send another GET request to /api/authors with query parameters page=2 and limit=10.
6. Verify that the response contains a different set of 10 authors.

## Expected Resluts
- The response status code should be 200 OK for both requests.
- The first response body should contain the first 10 authors.
- The second response body should contain the next set of 10 authors, different from the first response.

### Actual Test Results
- **Status Code**: `200 OK`
- **Response Time**: `16 ms`
- **Response Body**: The correct number of authors is returned for the respective page.

### Test Details in Postman
- **Name of Tests**: GET 5.1 Books & GET 5.2 Books
- **Location**: Books_API > Manual testing > Test 05 > GET 5.1 Books & GET 5.2 Books

---

# Manual Testing 5: Books

## Test Case 
"Verify that the API returns paginated results when a large number of records are requested."

## Test Steps
1. Send a GET request to /api/books with query parameters page=2 and limit=10.
2. Expect status code: 200 OK.
3. Verify that the response body contains only 10 books.
4. Send another GET request to /api/books with query parameters page=1 and limit=10.
6. Verify that the response contains a different set of 10 books.

## Expected Resluts
- The response status code should be 200 OK for both requests.
- The first response body should contain the second pages 10 books.
- The second response body should contain the first 10 books, different from the first response.

### Actual Test Results
- **Status Code**: `200 OK`
- **Response Time**: `17 ms`
- **Response Body**: The correct number of books is returned for the respective page.

### Test Details in Postman
- **Name of Tests**: GET 5.1 Books & GET 5.2 Books
- **Location**: Books_API > Manual testing > Test 05 > GET 5.1 Books & GET 5.2 Books

---

