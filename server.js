const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { Name, Email, Message } = req.body;

  // Creating a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'xxxxxxxxx@gmail.com',
      pass: 'xxxxxxxxx',
    },
  });

  // Setting up email data
  const mailOptions = {
    from: 'xxxxxxxxx@gmail.com',
    to: 'xxxxxxxxx@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}`,
  };

  // Sending the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
