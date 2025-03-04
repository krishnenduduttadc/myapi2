const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Fake API!' });
});

app.get('/new-endpoint', (req, res) => res.json({ message: 'This is a new endpoint!' }));


app.listen(PORT, () => console.log('Server running on port', PORT));
