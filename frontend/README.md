# MERN Task Manager - Frontend

A modern, responsive React application for managing tasks with authentication and real-time updates.

## Features

- User authentication (Register/Login/Logout)
- Protected routes with JWT
- Dashboard with task management
- Create, read, update, and delete tasks
- Advanced search and filtering
- User profile management
- Responsive design with Tailwind CSS
- Clean and intuitive UI
- Real-time validation

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Fetch API
- **State Management**: React Context API

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── ProtectedRoute.tsx   # Route protection
│   │   ├── TaskCard.tsx         # Task display card
│   │   └── TaskModal.tsx        # Task create/edit modal
│   ├── context/
│   │   └── AuthContext.tsx      # Authentication context
│   ├── pages/
│   │   ├── Dashboard.tsx        # Main dashboard
│   │   ├── Login.tsx            # Login page
│   │   ├── Register.tsx         # Registration page
│   │   └── Profile.tsx          # User profile
│   ├── services/
│   │   ├── authService.ts       # Auth API calls
│   │   └── taskService.ts       # Task API calls
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── utils/
│   │   └── api.ts               # API utility
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running on http://localhost:5000

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
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
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

The application will start on `http://localhost:3000`

## Features Overview

### Authentication

- **Register**: Create a new account with name, email, and password
- **Login**: Sign in with email and password
- **Logout**: Sign out and clear session
- **Protected Routes**: Automatic redirect to login if not authenticated

### Dashboard

- **Task List**: View all your tasks in a grid layout
- **Create Task**: Add new tasks with title, description, status, priority, and due date
- **Edit Task**: Update existing tasks
- **Delete Task**: Remove tasks with confirmation
- **Search**: Search tasks by title or description
- **Filter**: Filter by status and priority
- **Sort**: Sort by various criteria (date, title, etc.)

### Profile Management

- **View Profile**: See your user information
- **Update Profile**: Change name, email, and bio
- **Change Password**: Update your password
- **Avatar**: Optional avatar URL

## Components

### ProtectedRoute
Wrapper component that checks authentication before allowing access to routes.

### Navbar
Navigation bar with user info and logout functionality.

### TaskCard
Displays individual task with status, priority, and action buttons.

### TaskModal
Modal dialog for creating and editing tasks with form validation.

## Context & State Management

### AuthContext
Manages authentication state across the application:
- User data
- JWT token
- Login/logout functions
- Loading states

## API Integration

All API calls are centralized in service files:

**authService.ts**
- register()
- login()
- getMe()
- updateProfile()

**taskService.ts**
- getTasks()
- getTask()
- createTask()
- updateTask()
- deleteTask()

## Styling

The application uses Tailwind CSS for styling with:
- Responsive design (mobile-first)
- Custom color schemes
- Hover effects and transitions
- Shadow and border utilities
- Grid and flexbox layouts

## TypeScript Types

Strongly typed interfaces for:
- User
- Task
- AuthResponse
- API responses
- Component props

## Validation

Client-side validation for:
- Email format
- Password length (min 6 characters)
- Required fields
- Password confirmation matching

## Error Handling

Comprehensive error handling with:
- Try-catch blocks in async operations
- User-friendly error messages
- Network error handling
- Loading states

## Routing

Route structure:
- `/` - Redirects to dashboard
- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - Main dashboard (protected)
- `/profile` - User profile (protected)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Production Deployment

### Build Optimization

The production build includes:
- Code splitting
- Tree shaking
- Minification
- Asset optimization

### Deployment Options

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Environment Variables

Set production environment variables:
```env
VITE_API_URL=https://your-api-domain.com/api
```

## Performance Optimization

- Lazy loading of routes
- Memoization of expensive computations
- Debouncing of search inputs
- Optimized re-renders with proper key props
- Image optimization

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Color contrast compliance

## Scaling Considerations

### Code Organization
- Feature-based folder structure
- Reusable component library
- Centralized API calls
- Custom hooks for common logic

### State Management Evolution
- Can migrate to Redux/Zustand for complex state
- Consider React Query for server state
- Implement optimistic updates

### Performance at Scale
- Implement virtual scrolling for large lists
- Add pagination or infinite scroll
- Use React.memo for expensive components
- Implement service workers for offline support

### Monitoring
- Add error tracking (Sentry)
- Implement analytics (Google Analytics, Mixpanel)
- Performance monitoring (Web Vitals)
- User session recording

## License

MIT
