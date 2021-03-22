const sgMail = require('@sendgrid/mail')
const { htmlToText } = require('html-to-text');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const domainWhitelist = [
    'blakepetersen.io',
    'dalebridges.com',
    'kirbyelectriccompany.com'
]

const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    return await fn(req, res)
}

const handler = (req, res) => {
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

module.exports = allowCors(handler)
