// const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken');

// abandoned code for email verification... hoho

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-email-password'
//     }
// });

// const sendVerificationEmail = async (userEmail, userId) => {
//     const token = jwt.sign({ id: userId }, 'your-secret-key', { expiresIn: '1h' });
//     const verificationLink = `http://yourwebsite.com/verify-email?token=${token}`;

//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: userEmail,
//         subject: 'Verify Your Email',
//         html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`
//     };

//     await transporter.sendMail(mailOptions);
// };