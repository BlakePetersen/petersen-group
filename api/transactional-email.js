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

const handler = async (req, res) => {
    const { body, headers } = req
    
    console.log(req);

    // const _referer = new URL(headers.referer)
    // if (!_referer || domainWhitelist.includes(_referer.hostname)) {
    //     return;
    // }

    const msg = {
        to: body.to,
        from: body.from,
        subject: body.subject,
        text: htmlToText(body.body, { wordwrap: 130 }),
        html: body.body,
    }

    await sgMail
        .send(msg)
        .then(() => {
            console.log('Email Sent')
            res.status(200)
        })
        .catch((error) => {
            console.error(error)
            res.status(500)
        })
}

module.exports = allowCors(handler)
