# 🎓 Student Management System

A robust, clean, and object-oriented backend API for managing student records.  
Built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

-   **Create, Read, Update, Delete (CRUD)**: Full lifecycle management for student data.
-   **Advanced Search**: Filter students by name or email.
-   **Sorting & Pagination**: Efficiently handle large datasets with flexible sort options and page limits.
-   **Security**: Simple API Key authentication implementation.
-   **Clean Architecture**: Follows strict **Controller-Service-Repository** pattern.
-   **Type Safety**: Fully typed with TypeScript.

---

## 🛠️ Tech Stack

-   **Runtime**: Node.js
-   **Language**: TypeScript
-   **Framework**: Express.js
-   **Database**: MongoDB
-   **ODM**: Mongoose

---

## ⚙️ Installation & Setup

### Prerequisites
-   [Node.js](https://nodejs.org/) (v16+)
-   [MongoDB](https://www.mongodb.com/) running locally on port `27017`

### Steps

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd StudentManagementSystem
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start the Server**
    ```bash
    npm start
    ```
    > The server will start on **http://localhost:4000**

---

## 📡 API Documentation

**Authentication**: All endpoints require the header:
`x-api-key: secret-token`

### Student Endpoints

| Method | Endpoint | Description | Query Params |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/students` | Create a new student | - |
| `GET` | `/api/students` | Get all students | `search`, `sortBy`, `order`, `page`, `limit` |
| `GET` | `/api/students/:id` | Get student by ID | - |
| `PUT` | `/api/students/:id` | Update a student | - |
| `DELETE` | `/api/students/:id` | Delete a student | - |

### Example Usage

**1. Create a Student**
```bash
curl -X POST http://localhost:4000/api/students \
  -H "x-api-key: secret-token" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 22,
    "grade": "A"
  }'
```

**2. List Students (Sorted by Age, Descending)**
```bash
curl -H "x-api-key: secret-token" \
  "http://localhost:4000/api/students?sortBy=age&order=desc"
```

---

## 📂 Project Structure

```bash
src/
├── app.ts           # Application Setup & config
├── server.ts        # Entry point
├── controllers/     # Request Handlers
├── services/        # Business Logic
├── repositories/    # Database Access Layer
├── models/          # Mongoose Schemas & Types
├── routes/          # API Route Definitions
└── middlewares/     # Auth & Error Handling
```

---

## 📝 License
This project is open source and available under the [ISC License](LICENSE).
