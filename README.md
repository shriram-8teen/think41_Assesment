# Think41 Polls API

A simple Node.js + Express RESTful backend for creating and managing polls.  
This API supports poll creation, voting, closing polls, and viewing results.

## Features

- Create polls with multiple options
- Vote on polls
- Close polls
- List all active polls
- View poll results

## Folder Structure
````
think41-task/
├── index.js
├── routes/
  └── api.js
│ └── polls.js
├── data/
│ └── pollsData.js
├── .env
├── .gitignore
├── package.json
├── README.md
````


## API Endpoints

### Create a Poll

```http
POST /polls
Content-Type: application/json

{
  "question": "Your question here",
  "options": ["Option 1", "Option 2", "Option 3"]
}
```
List Active Polls
h
Copy
Edit
GET /polls
Vote on a Poll

POST /polls/:id/vote
Content-Type: application/json
````
{
  "option": "Option 1"
}
````
###
Close a Poll

PUT 
/polls/:id/close
###
Get Poll Result
GET
/polls/:id
##
Setup Instructions
###
Clone the Repository
git clone https://github.com/shriram-8teen/think41_Assesment.git
cd think41_Assesment
##
Install Dependencies
####
npm install
####
Start the Server
npm run dev
####
Server will run at: http://localhost:3000
###
Environment Variables
Create a .env file with the following:
PORT=3000
##
Tech Stack
####
Node.js
####
Express
####
Nodemon
####
dotenv
###
```
Notes: 
Data is stored in-memory using a temporary array.

Restarting the server will reset all polls and votes.

Author:
Shriram Hegde
````
