const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// router.get('/tickets/new', ticketsCtrl.new);
// POST /tickets/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);
// router.post('tickets/new', ticketsCtrl.create);

module.exports = router;