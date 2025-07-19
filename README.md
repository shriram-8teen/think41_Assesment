# Think41 Polls API

A simple Node.js + Express RESTful backend for creating and managing polls.  
This API supports poll creation, voting, closing polls, and viewing results.

## Features

- Create polls with multiple options
- Vote on polls
- Close polls
- List all active polls
- View poll results

## API Endpoints

### Create a Poll

```http
POST /polls
Content-Type: application/json

{
  "question": "Your question here",
  "options": ["Option 1", "Option 2", "Option 3"]
}
````

##
GET /polls
POST /polls/:id/vote
Content-Type: application/json

{
  "option": "Option 1"
}
