const express = require("express");
const contactsControllers = require("../controllers/contactsControllers");
const router = express.Router();

router
  .route("/")
  .get(contactsControllers.getAllContacts)
  .post(contactsControllers.createNewContact);

router
  .route("/:id")
  .get(contactsControllers.getContactById)
  .put(contactsControllers.updateContactById)
  .delete(contactsControllers.deleteContactById);

module.exports = router;
