const fs = require("fs");

const diagrams = JSON.parse(fs.readFileSync(__dirname + '/diagrams.json'));
exports.list = (request, response) => {
    console.log('List all diagrams');
    response.json(diagrams.map(d => {
        return {
            id: d.id,
            name: d.name
        }}));
}
exports.get = (request, response) => {
    console.log('Get diagram id:' + request.params.Id);
    const id = parseInt(request.params.Id);
    const d = diagrams.find(d => {
        return d.id == id;
    })
    if (d) {
        response.json(d);
    } else {
        response.sendStatus(404);
    }
}