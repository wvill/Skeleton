var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/client'));

app.listen(3001, function(){
    console.log('server on')
});