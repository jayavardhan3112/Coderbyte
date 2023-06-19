# Frontend

## Setup and Run

Install the frontend dependencies:

```
cd frontend
npm install
```

Configure the backend URL:

- Open the src/api.js file.
- Set the BASE_URL variable to the URL of your backend server. By default, it is set to http://localhost:8000.

Start the frontend development server:

```
npm start
```

The frontend development server will start running at http://localhost:3000.

## Usage

- Enter search keywords in the input field and click the "Search" button to perform a search.
- The search results will be displayed below the search input.
- Click the "Get All Data" button to fetch all the data from the backend.
