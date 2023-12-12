const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js microservice!, WOW');
});

app.get('/hi',function(req,res){
    res.send('{"response":"Hi Everyone"}');
})

app.get('/ready',function(req,res){
    res.send('{"response":"Ready for the test ride!"}');
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
module.exports=app;