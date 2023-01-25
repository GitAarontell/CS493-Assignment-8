const express = require('express');
const routerBoats = express.Router();
const boatfunc = require('./boatFunc');



routerBoats.get('/', function (req, res) {
    const boats = boatfunc.get_boats()
        .then((boats) => {
            res.status(200).json(boats);
        });  
});

routerBoats.get('/:id', function (req, res) {
    boat_id = req.params.id;
    boatfunc.get_boat(boat_id)
        .then(boat => {
            if (boat[0] === undefined || boat[0] === null) {
                res.status(404).json({ 'Error': 'No boat with this boat_id exists' });
            } else {
                res.status(200).json(boat[0]);
            }
        });
});

routerBoats.post('/', function (req, res) {
    if (Object.keys(req.body).length == 1) {
        name = req.body.name;
        boatfunc.post_boat({"name": name})
            .then(key => { 
                res.status(201).send({
                "id": key.id,
                "name": name}) 
            });
    } else {
        res.status(400).send({"Error": "The request object is missing at least one of the required attributes"});
    }
    
});

routerBoats.delete('/:id', function (req, res) {
    boatfunc.get_boat(req.params.id).then(boat => {
        if (boat[0] === undefined || boat[0] === null) {
            res.status(404).json({ 'Error': 'No boat with this boat_id exists' });
        } else {
            boatfunc.delete_boat(req.params.id).then(
                res.status(204).end()); 
        }
    });
    
});

module.exports = routerBoats;