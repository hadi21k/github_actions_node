# Express REST API

A simple Express REST API with a health check endpoint.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

## Testing

Run the tests:

```bash
npm test
```

This will run all tests and show code coverage information.

## API Endpoints

### Health Check

- **GET** `/health`
  - Returns a JSON response with status, message, and timestamp
  - Example response:
    ```json
    {
      "status": "ok",
      "message": "Hello World!",
      "timestamp": "2024-04-15T12:00:00.000Z"
    }
    ```

## Environment Variables

- `PORT` - Server port (default: 3000)
