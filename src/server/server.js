// import express from 'express';

const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("hellosdfsfsdfsdfsgirl")
})

app.listen(3000, () => {
    console.log('going places conected running on port 3000');
})
