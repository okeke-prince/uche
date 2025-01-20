"use server"
const sqlite3 = require("better-sqlite3");
const db = sqlite3("destination.sqlite");

export async function handleSubmit(formData) {
    "use server"
  
    const contact = {
      name: formData.get('username'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }
  
    console.log(formData)
    console.log(contact.email)
  
    try {
      await db.prepare(
        `INSERT INTO contact_submissions (
          name,
          email,
          subject,
          message
        ) VALUES (?, ?, ?, ?)`
      ).run(
        contact.name,
        contact.email,
        contact.subject,
        contact.message
      )
  
      console.log("Data successfully inserted into the database!");
    } catch (error) {
      console.error("Error inserting data into the database:", error);
    }
  }