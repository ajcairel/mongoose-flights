const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    Flight.create(req.body, function(err, ticket) {
        res.redirect('/tickets/new');
    });
}

function newTicket(req, res) {
    res.render('tickets/new', { ticket })
}



