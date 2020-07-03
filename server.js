const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/')));

// Handles any requests that don't match the ones above
app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`App listening on port 3000! Go to http://localhost:${port}`);
})
