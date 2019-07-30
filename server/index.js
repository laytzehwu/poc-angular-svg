const express = require('express');
const app = express();
const version = 'v0';
const diagramModule = require('./modules/diagrams');
app.set('port', (process.env.PORT || 4201));

app.get(`/${version}/diagrams`, diagramModule.list);
app.get(`/${version}/diagram/:Id`, diagramModule.get);

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});