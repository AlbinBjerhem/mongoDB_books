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

# Manual Testing 6: Authors

## Test Case
"Check if the API handles special characters and non-English text correctly in input data and returned responses."

## Test Steps
1. Send a GET request to /api/authors with the query parameter firstName=Pär.
2. Expect status code: 200 OK.
3. Verify that the response body includes authors with the name Pär.

## Expected Results
- The response status code should be 200 OK.
- The response body should have the authors with the name Pär in it.

### Actual Test Results
- **Status Code**: `200 OK`
- **Response Time**: `14 ms`
- **Response Body**: As expected. Below is a snippet of the JSON response:
  ```json
    {
        "_id": "6627dfab5985abb9867517d9",
        "authorId": 8,
        "firstName": "Pär",
        "lastName": "Ärlandsson",
        "__v": 0
    }

### Test Details in Postman
- **Name of Tests**: GET 5.1 Books & GET 6. Authors
- **Location**: Books_API > Manual testing > Test 06 > GET 6. Authors

---

# Manual Testing 6: Books

## Test Case
"Check if the API handles special characters and non-English text correctly in input data and returned responses."

## Test Steps
1. Send a GET request to /api/books with the query parameter title=Ödets smala väg.
2. Expect status code: 200 OK.
3. Verify that the response body includes books with the name Ödets smala väg.

## Expected Results
- The response status code should be 200 OK.
- The response body should have the books with the name Ödets smala väg in it.

### Actual Test Results
- **Status Code**: `200 OK`
- **Response Time**: `15 ms`
- **Response Body**: As expected. Below is a snippet of the JSON response:
  ```json
   {
        "_id": "6627dfab5985abb986751840",
        "genre": "Non-fiction",
        "title": "Ödets smala väg",
        "authorId": 44,
        "publicationDate": "1958-07-09T00:00:00.000Z",
        "info": "Provides insightful analysis and detailed exploration of real-world topics. The plot is engaging and thought-provoking, suitable for all fans of the genre.",
        "rating": 2,
        "__v": 0
    }

### Test Details in Postman
- **Name of Tests**: GET 6 Books
- **Location**: Books_API > Manual testing > Test 06 > GET 6. Books

---

# Manual Testing 7: Authors

## Test Case
"Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency."

## Test Steps
1. **POST Phase**
  - Send concurrent POST requests to create multiple authors.
  - Use Postman's Collection Runner to execute these requests simultaneously.
  - Verify each response has a 201 Created status and contains a unique author ID.

2. **DELETE Phase**
  - Send concurrent DELETE requests to remove the authors created in the POST phase.
  - Use Postman's Collection Runner to execute these requests simultaneously.
  - Verify each response has a 200 OK status and includes a success message for deletion.

## Expected Results
- All POST requests should return 201 Created with a unique ID for each author.
- All DELETE requests should return 200 OK with a confirmation of deletion.
- The database should be able to handle all the requests

### Actual Test Results
- **POST Phase Results**
  -**Status Codes**: All 201 Created
  -**Response Bodies**: Include IDs and confirm data integrity.

- **DELETE Phase Results**:
  -**Status Codes**: All 20 OK
  -**Response Bodies**: Confirm successful deletion.

### Test Details in Postman
- **Name of Tests**: POST 7.1 - 7.10 Authors & DELETE 7.1 - 7.10 Authors
- **Location**: Books_API > Manual testing > Test 07 > 7. POST Authors & 7. DELETE Authors

---

# Manual Testing 7: Books

## Test Case
"Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency."

## Test Steps
1. **POST Phase**
  - Send concurrent POST requests to create multiple books.
  - Use Postman's Collection Runner to execute these requests simultaneously.
  - Verify each response has a 201 Created status and contains a unique book ID.

2. **DELETE Phase**
  - Send concurrent DELETE requests to remove the books created in the POST phase.
  - Use Postman's Collection Runner to execute these requests simultaneously.
  - Verify each response has a 200 OK status and includes a success message for deletion.

## Expected Results
- All POST requests should return 201 Created with a unique ID for each book.
- All DELETE requests should return 200 OK with a confirmation of deletion.
- The database should be able to handle all the requests

### Actual Test Results
- **POST Phase Results**
  -**Status Codes**: All 201 Created
  -**Response Bodies**: Include IDs and confirm data integrity.

- **DELETE Phase Results**:
  -**Status Codes**: All 20 OK
  -**Response Bodies**: Confirm successful deletion.

### Test Details in Postman
- **Name of Tests**: POST 7.1 - 7.10 Books & DELETE 7.1 - 7.10 Books
- **Location**: Books_API > Manual testing > Test 07 > 7. POST Books & 7. DELETE Books

---

# Manual Testing 8: Authors

## Test Case
"Create an automated test and test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method."

## Test Steps
1. **POST**: Send a POST request to `/api/authors` to create a new author.
   - Expect status code: 201 Created.
   - Verify that the response body contains the ID of the newly created author.
2. **GET**: Send a GET request to `/api/authors` to retrieve the authors.
   - Expect status code: 200 OK.
   - Verify that the authors details are in the body,
3. **PUT**: Send a PUT request to `/api/authors/{authorId}` to update the author's details.
   - Expect status code: 200 OK.
   - Verify that the response confirms the update.
4. **DELETE**: Send a DELETE request to `/api/authors/{authorId}` to delete the author.
   - Expect status code: 200 OK.
   - Verify that the response includes a success message.

## Expected Results
- All requests return the correct status codes as outlined above.

### Actual Test Results
- **Status Codes**: `201 Created`, `200 OK`, `200 OK`, `200 OK`
- **Response Time**: Average `20 ms`
- **Response Body**: Correctly reflects the author data for each operation.

### Test Details in Postman
- **Name of Tests**: POST 8. Authors, GET 8. Authors, PUT 8. Authors & DELETE 8. Authors
- **Location**: Books_API > Manual testing > Test 08 > Author Tests

---

# Manual Testing 8: Books

## Test Case
"Verify that the API supports full lifecycle management of books with GET, POST, PUT, and DELETE operations."

## Test Steps
1. **POST**: Send a POST request to `/api/books` to create a new book.
   - Expect status code: 201 Created.
   - Verify that the response body contains the ID of the newly created book.
2. **GET**: Send a GET request to `/api/books` to retrieve the books.
   - Expect status code: 200 OK.
   - Verify that the books details are in the body.
3. **PUT**: Send a PUT request to `/api/books/{bookId}` to update the book's details.
   - Expect status code: 200 OK.
   - Verify that the response confirms the update.
4. **DELETE**: Send a DELETE request to `/api/books/{bookId}` to delete the book.
   - Expect status code: 200 OK.
   - Verify that the response includes a success message.

## Expected Results
- All requests return the correct status codes as outlined above.

### Actual Test Results
- **Status Codes**: `201 Created`, `200 OK`, `200 OK`, `200 OK`
- **Response Time**: Average `18 ms`
- **Response Body**: Correctly reflects the book data for each operation.

### Test Details in Postman
- **Name of Tests**: POST 8. Books, GET 8. Books, PUT 8. Books & DELETE 8. Books
- **Location**: Books_API > Manual testing > Test 08 > Book Tests
