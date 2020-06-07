const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gandhi.sarthak15@gmail.com',
        subject: 'Welcome to Task-Manager',
        text: `Hello! ${name}, Thanks for joining our app. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gandhi.sarthak15@gmail.com',
        subject: 'Sorry to see you go',
        text: `Good Bye ${name}, Hope to see you back sometimes soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}