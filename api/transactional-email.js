const sgMail = require('@sendgrid/mail')
const { htmlToText } = require('html-to-text');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const domainWhitelist = [
    'blakepetersen.io',
    'dalebridges.com',
    'kirbyelectriccompany.com'
]

module.exports = (req, res) => {
    const _referer = new URL(req.headers.referer)
    if (!_referer || domainWhitelist.includes(_referer.hostname)) {
        return;
    }

    const _message = JSON.parse(req.body)

    const msg = {
        to: _message.to,
        from: _message.from,
        subject: _message.subject,
        text: htmlToText(_message.body, { wordwrap: 130 }),
        html: _message.body,
    }

    sgMail
        .send(msg)
        .then(() => {
            res.json({
                body: 'success',
                status: 200
            })
        })
        .catch((error) => {
            res.json({
                body: `error: ${error}`,
                status: 500
            })
        })
}