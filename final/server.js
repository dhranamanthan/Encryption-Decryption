'use strict';

require('dotenv').config();  // Ensure this is at the top

const express = require('express');
const bodyParser = require('body-parser');
const { encrypt, decrypt } = require('./encryption');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/encrypt', (req, res) => {
    const { text } = req.body;
    console.log('Received text for encryption:', text);  // Log received text
    try {
        const encryptedText = encrypt(text);
        res.send({ encryptedText });
    } catch (error) {
        console.error('Encryption error:', error);  // Log error
        res.status(500).send({ error: error.message });
    }
});

app.post('/decrypt', (req, res) => {
    const { text } = req.body;
    console.log('Received text for decryption:', text);  // Log received text
    try {
        const decryptedText = decrypt(text);
        res.send({ decryptedText });
    } catch (error) {
        console.error('Decryption error:', error);  // Log error
        res.status(500).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
