# Student Management System

A simple, humane, and clean OOP-based CRUD backend for managing students.
Built with Node.js, Express, and TypeScript, following the Controller-Service-Repository pattern.

## Features

-   **CRUD Operations**: Create, Get (List + Single), Update, Delete students.
-   **Search & Filtering**: Filter list by name.
-   **Sorting**: Sort list by fields (e.g., ?sortBy=grade).
-   **Pagination**: Limit and offset support (e.g., ?page=1&limit=10).
-   **Clean OOP Architecture**: Separated concerns (Route -> Controller -> Service -> Repository).
-   **In-Memory Database**: Simple and portable, no external database setup required.
-   **Authentication (Bonus)**: Simple header-based check (`x-api-key`).

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the Server**:
    ```bash
    npm start
    ```
    Server will run on `http://localhost:3000`.

## API Endpoints

### Authentication
Include header `x-api-key: secret-token` in all requests to access protected routes (all routes).

### Students

-   **Create Student**
    -   `POST /api/students`
    -   Body: `{ "name": "John Doe", "age": 20, "email": "john@example.com", "grade": "A" }`

-   **Get All Students**
    -   `GET /api/students`
    -   Query Params:
        -   `search`: Filter by name.
        -   `sortBy`: Field to sort by (e.g., `age`).
        -   `order`: `asc` or `desc` (default `asc`).
        -   `page`: Page number (default 1).
        -   `limit`: Items per page (default 10).

-   **Get Student by ID**
    -   `GET /api/students/:id`

-   **Update Student**
    -   `PUT /api/students/:id`
    -   Body: `{ "grade": "A+" }`

-   **Delete Student**
    -   `DELETE /api/students/:id`
