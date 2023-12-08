// Create web server
// GET /comments
// POST /comments
// PUT /comments/:id
// DELETE /comments/:id
// ----------------------------------------------------------

// Import modules
const express = require('express');
const router = express.Router();

// Import model
const Comment = require('../models/comment');

// GET /comments
router.get('/', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(comments);
        }
    });
});

// POST /comments
router.post('/', (req, res) => {
    Comment.create(req.body, (err, comment) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(comment);
        }
    });
});

// PUT /comments/:id
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, comment) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(comment);
        }
    });
});

// DELETE /comments/:id
router.delete('/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id, (err, comment) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(comment);
        }
    });
});

// Export module
module.exports = router;