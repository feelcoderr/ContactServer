const db = require("../config/db");

class Contact {
  constructor(first_name, last_name, email, mobile_number) {
    (this.first_name = first_name),
      (this.last_name = last_name),
      (this.email = email),
      (this.mobile_number = mobile_number);
  }

  save() {
    let sql = `
    INSERT INTO contacts(
     first_name,
      last_name,
      email,
      mobile_number
    )
    VALUES(
      '${this.first_name}',
      '${this.last_name}',
      '${this.email}',
      '${this.mobile_number}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM contacts;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM contacts WHERE id = ${id};`;

    return db.execute(sql);
  }

  static updateById(id, field, data) {
    let sql = `UPDATE contacts
SET ${field} = '${data}'
WHERE contact_id = ${id};`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM contacts WHERE contact_id=${id};`;
    return db.execute(sql);
  }
}

module.exports = Contact;
