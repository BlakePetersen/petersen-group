const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (req, res) => {
    if (req.body.lock !== 'ding') {
        return;
    }

    const msg = {
        to: 'blakepetersen@gmail.com', // Change to your recipient
        from: req.body.sender, // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    sgMail
        .send(msg)
        .then(() => {
            res.json({
                body: 'success!',
                status: 200
            })
        })
        .catch((error) => {
            res.json({
                body: `error: ${error}`,
                status: 200
            })
        })
}