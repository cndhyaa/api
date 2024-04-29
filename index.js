const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db');

connectToDatabase();
const app = express();

app.use('/static', express.static('upload'))

const routes = require('./routes/index');

app.use(cors());
app.use(express.json());


app.use('/api/', routes);

app.listen(8000, () => {
    console.log('listening on port 8000 🤣')
});
