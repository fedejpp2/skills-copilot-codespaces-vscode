// create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const comment = require('./comment');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
    res.send(
        comment.comments
    )
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    console.log(newComment);
    comment.comments.push(newComment);
    res.send({
        success: true,
        message: 'Comment added successfully!'
    })
});

app.listen(process.env.PORT || 8081);