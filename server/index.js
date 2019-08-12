const express = require('express');
const app = express();
const version = 'v0';
const diagramModule = require('./modules/diagrams');
const settingsModule = require('./modules/settings');
app.set('port', (process.env.PORT || 4201));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get(`/${version}/diagrams`, diagramModule.list);
app.get(`/${version}/diagram/:Id`, diagramModule.get);
app.get(`/${version}/settings/diagrams`, settingsModule.diagrams);

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});