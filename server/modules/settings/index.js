const fs = require("fs");

const diagrams = JSON.parse(fs.readFileSync(__dirname + '/diagrams.json'));

exports.diagrams = (request, response) => {
    console.log('Return diagrams setting');
    response.json(diagrams);    
}