// import express from 'express';

const express = require('express');
const path = require('path');

let app = express();

app.get('/', (req, res) => {
    res.send("hello baby girl")
})

app.listen(3000, () => { console.log('going places conected running on port 3000'); })
