const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.get('/', function(요청, 응답) { 
    응답.sendFile(__dirname+'/index.html')
})

app.get('/menu', function(요청, 응답) { 
    응답.sendFile(__dirname+'/menu.html')
})

app.get('/menu1', function(요청, 응답) { 
    응답.sendFile(__dirname+'/menu1.html')
})
app.get('/menu2', function(요청, 응답) { 
    응답.sendFile(__dirname+'/menu2.html')
})