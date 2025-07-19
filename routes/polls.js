const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let polls = []; // In-memory storage

// Create a new poll
router.post('/', (req, res) => {
  const { question, options } = req.body;
  if (!question || !options || options.length < 2) {
    return res.status(400).json({ message: 'Question and at least 2 options are required.' });
  }

  const poll = {
    id: uuidv4(),
    question,
    options: options.map((opt) => ({ option: opt, votes: 0 })),
    status: 'ACTIVE',
    createdAt: new Date(),
  };

  polls.push(poll);
  res.status(201).json(poll);
});

// Get all active polls
router.get('/', (req, res) => {
  const activePolls = polls.filter((poll) => poll.status === 'ACTIVE');
  res.json(activePolls);
});

// Vote on a poll
router.post('/:id/vote', (req, res) => {
  const { id } = req.params;
  const { option } = req.body;

  const poll = polls.find((p) => p.id === id);
  if (!poll) return res.status(404).json({ message: 'Poll not found.' });

  if (poll.status === 'CLOSED') return res.status(403).json({ message: 'Poll is closed.' });

  const selectedOption = poll.options.find((opt) => opt.option === option);
  if (!selectedOption) return res.status(400).json({ message: 'Invalid option selected.' });

  selectedOption.votes += 1;
  res.json({ message: 'Vote recorded.', poll });
});

// Close a poll
router.put('/:id/close', (req, res) => {
  const { id } = req.params;
  const poll = polls.find((p) => p.id === id);
  if (!poll) return res.status(404).json({ message: 'Poll not found.' });

  poll.status = 'CLOSED';
  res.json({ message: 'Poll closed.', poll });
});

// Get poll result
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const poll = polls.find((p) => p.id === id);
  if (!poll) return res.status(404).json({ message: 'Poll not found.' });

  res.json(poll);
});

module.exports = router;
