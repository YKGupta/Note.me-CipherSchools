const express = require('express');
const AuthRouter = require('./routers/Auth');
const cors = require('cors');
const NotesRouter = require('./routers/Note');

require('dotenv').config();
require('./db');

const app = express();

const PORT = process.env.PORT || 1234;

app.use(cors());
app.use(express.json());

app.use(AuthRouter);
app.use(NotesRouter);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});