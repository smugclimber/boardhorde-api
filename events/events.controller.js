const express = require ('express');
const router = express.Router();
const eventService = require ('./event.service');

// ROUTES
router.post('/event', create);

module.exports = router;

function create(req, res, next){
    console.log("creating an event...");
    
    eventService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));    
}