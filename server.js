const express = require('express');
const path = require('path');
 
const app = express();
const port = process.env.PORT || 8000;
 
app.use(express.static(__dirname + '/dist/d-picker'));
 
app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/dist/d-picker/index.html'));
});
 
 
// app.listen(process.env.PORT || 8000);
app.listen(port,()=>{
  console.log('Port running at 8000');
})
