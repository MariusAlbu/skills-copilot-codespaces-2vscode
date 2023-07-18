// Create web server
// Run: node comments.js
// Open: http://localhost:3000
// Stop: Ctrl+C
// =============================================================================

// Import the express module
var express = require('express');
var app = express();

// Import the body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import the comments module
var comments = require('./comments');

// Import the cors module
var cors = require('cors');
app.use(cors());

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments.getAll());
});

// Create a new comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.add(comment);
  res.json(comments.getAll());
});

// Delete a comment
app.delete('/comments/:id', function(req, res) {
  var id = req.params.id;
  comments.delete(id);
  res.json(comments.getAll());
});

// Update a comment
app.put('/comments/:id', function(req, res) {
  var id = req.params.id;
  var comment = req.body;
  comments.update(id, comment);
  res.json(comments.getAll());
});

// Start the server
app.listen(3000);
console.log('Server running on port 3000');
