const express = require('express');
const db = require('./db');
const app = express();
const jobs = require('./routes/jobsRoute');
const users = require('./routes/usersRoute');

app.use(express.json());
app.use('/api/jobs', jobs);
app.use('/api/users', users);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
