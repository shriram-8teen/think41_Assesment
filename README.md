
# Think41 Polls API

A simple RESTful backend for managing polls.

## Features
- Create polls with multiple options
- Vote on polls
- Close polls
- Get active polls
- View poll results

## Endpoints

### Create Poll
```http
POST /polls
Body: {
  "question": "Your question here",
  "options": ["Option 1", "Option 2"]
}
```

### List Active Polls
```http
GET /polls
```

### Vote on a Poll
```http
POST /polls/:id/vote
Body: {
  "option": "Option 1"
}
```

### Close Poll
```http
PUT /polls/:id/close
```

### Get Poll Result
```GET http/polls/:id


```



