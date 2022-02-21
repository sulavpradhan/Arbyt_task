const express = require("express");
const router = express.Router();
const {
  getTickets,
  createTickets,
  getTicket,
  deleteTicket,
  updateTicket,
} = require("../controller/ticketController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTickets);

router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .post(protect, updateTicket);

module.exports = router;
