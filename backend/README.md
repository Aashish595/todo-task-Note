# MERN Task Manager - Backend

A robust RESTful API built with Node.js, Express, and MongoDB for managing tasks with authentication.

## Features

- JWT-based authentication
- User registration and login
- Profile management
- CRUD operations for tasks
- Advanced filtering and search
- Password hashing with bcrypt
- Input validation
- Error handling middleware
- MongoDB indexes for performance

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing
- **Validation**: express-validator

## Project Structure

```
backend/
├── config/
│   └── db.js                 # Database connection
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── taskController.js     # Task CRUD logic
├── middleware/
│   └── auth.js               # JWT verification middleware
├── models/
│   ├── User.js               # User schema
│   └── Task.js               # Task schema
├── routes/
│   ├── auth.js               # Auth routes
│   └── tasks.js              # Task routes
├── utils/
│   └── generateToken.js      # JWT token generator
├── .env.example              # Environment variables template
├── .gitignore
├── package.json
├── server.js                 # Entry point
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
JWT_SECRET=your_secure_random_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

### MongoDB Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user with password
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and add it to `.env`

### Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |
| PUT | `/api/auth/profile` | Update profile | Yes |

### Tasks

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/tasks` | Get all user tasks | Yes |
| GET | `/api/tasks/:id` | Get single task | Yes |
| POST | `/api/tasks` | Create new task | Yes |
| PUT | `/api/tasks/:id` | Update task | Yes |
| DELETE | `/api/tasks/:id` | Delete task | Yes |

### Query Parameters for GET `/api/tasks`

- `status`: Filter by status (pending, in-progress, completed)
- `priority`: Filter by priority (low, medium, high)
- `search`: Search in title and description
- `sort`: Sort by field (prefix with `-` for descending)

Example:
```
GET /api/tasks?status=pending&priority=high&search=important&sort=-createdAt
```

## API Documentation

Import the Postman collection from `POSTMAN_COLLECTION.json` for complete API documentation with example requests.

### Sample Requests

**Register User**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Login**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Create Task** (requires token)
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "Complete project",
    "description": "Finish the MERN stack project",
    "status": "in-progress",
    "priority": "high",
    "dueDate": "2024-12-31"
  }'
```

## Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Protected routes with authentication middleware
- Input validation on all endpoints
- Mongoose schema validation
- User-specific data access control

## Error Handling

The API returns consistent error responses:

```json
{
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email"
    }
  ]
}
```

HTTP Status Codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Server Error

## Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique, indexed),
  password: String (hashed),
  bio: String,
  avatar: String,
  timestamps: true
}
```

### Task Model
```javascript
{
  title: String,
  description: String,
  status: Enum ['pending', 'in-progress', 'completed'],
  priority: Enum ['low', 'medium', 'high'],
  dueDate: Date,
  user: ObjectId (ref: User),
  timestamps: true
}
```

## Performance Optimizations

- MongoDB indexes on frequently queried fields
- Password select: false by default
- Lean queries where appropriate
- Connection pooling with Mongoose

## Production Deployment

For production deployment:

1. Use a strong, random JWT secret
2. Set NODE_ENV to 'production'
3. Enable MongoDB connection string encryption
4. Use environment-specific MongoDB clusters
5. Implement rate limiting
6. Add HTTPS
7. Set up proper logging
8. Use PM2 or similar for process management
9. Configure CORS for specific origins only

## Scaling Considerations

### Horizontal Scaling
- API is stateless (JWT-based auth)
- Can run multiple instances behind a load balancer
- MongoDB supports replica sets for read scaling

### Vertical Scaling
- Optimize database queries with proper indexes
- Implement caching (Redis) for frequently accessed data
- Use MongoDB aggregation pipelines for complex queries

### Microservices Evolution
- Auth service can be separated
- Task service can be separated
- Add message queue (RabbitMQ/Kafka) for async operations
- Implement event-driven architecture

### Performance Enhancements
- Add Redis caching layer
- Implement CDN for static assets
- Use database connection pooling
- Add API rate limiting
- Implement request compression

## License

MIT
