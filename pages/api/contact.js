const nodemailer = require('nodemailer');

export default function (req, res) {
  const {
    name,
    phone,
    email,
    question
  } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.zoho.com",
    secure: true,
    auth: {
      user: 'admin@steelvirtue.com',
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  const mailBody = `<ul>
      <li>Name: ${name}</li>
      <li>Phone: ${phone}</li>
      <li>Email: ${email}</li>
      <li>Quesiton:<br>
        ${question}
      </li>
    </ul>`;

  const mailData = {
    from: 'admin@steelvirtue.com',
    to: 'alex.jones@steelvirtue.com',
    subject: `NEW Form Submission from ${name}`,
    html: mailBody,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if(err) {

        return reject(JSON.stringify(err));
      } else {
        res.statusCode = 200;
        res.send(JSON.stringify('ok'));
        res.end();
        return resolve();
      }
    });
  });
}