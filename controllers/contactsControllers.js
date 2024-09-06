const Contact = require("../models/Contacts");

exports.getAllContacts = async (req, res, next) => {
  try {
    const [contacts, _] = await Contact.findAll();
    res.status(200).json({ contacts });
  } catch (error) {
    next(error);
  }
};

exports.createNewContact = async (req, res, next) => {
  try {
    let { first_name, last_name, email, mobile_number } = req.body;
    let contact = new Contact(first_name, last_name, email, mobile_number);

    contact = await contact.save();

    res.status(201).json({ message: "Post created" });
  } catch (error) {
    next(error);
  }
};

exports.getContactById = async (req, res, next) => {
  try {
    let contactId = req.params.id;

    let [contact, _] = await Contact.findById(contactId);

    res.status(200).json({ post: contact[0] });
  } catch (error) {
    next(error);
  }
};

exports.updateContactById = async (req, res, next) => {
  try {
    let contactId = req.params.id;

    let [contact, _] = await Contact.updateById(
      contactId,
      req.body.field,
      req.body.value
    );

    res.status(200).json({ post: contact[0] });
  } catch (error) {
    next(error);
  }
};

exports.deleteContactById = async (req, res, next) => {
  try {
    let contactId = req.params.id;

    let [contact, _] = await Contact.deleteById(contactId);

    res.status(200).json({ post: contact[0] });
  } catch (error) {
    next(error);
  }
};
