let express = require('express');
let app = express();
let morgan = require('morgan');
let port = 3000;

app.use(morgan('dev'));
app.use(express.static(__dirname + './client/dist'))

app.listen(port, () => {
  console.log(`serving port: ${port}`)
})
