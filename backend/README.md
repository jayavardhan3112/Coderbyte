# Backend

## Setup and Run

Install the backend dependencies:

```
cd backend
npm install
```

Configure the environment variables:

- Create a .env file in the backend directory.
- Add the following environment variables and set their values accordingly:

```
MONGO_URL=<your-mongodb-connection-url>
DB_NAME=<your-database-name>
COLLECTION_NAME=<your-collection-name>
```

Start the backend server:

```
npm start
```

The backend server will start running at http://localhost:8000.

## API Endpoints

```
/search?query=<search-query>: Performs a search query and returns the results.
```

```
/search/all: Fetches all the data from the database.
```
