const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json([
    { id: 2, name: 'Karan Rohra', age: 32, position: 'Developer' },
    { id: 3, name: 'Alice', age: 27, position: 'Designer' },
    { id: 4, name: 'Bob', age: 35, position: 'Engineer' },
    { id: 5, name: 'John Doe', age: 30, position: 'Manager' },
    { id: 6, name: 'Jane Smith', age: 25, position: 'Developer' }
  ]);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
