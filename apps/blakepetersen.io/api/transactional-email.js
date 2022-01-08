const sgMail = require('@sendgrid/mail')
const { htmlToText } = require('html-to-text');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
    const { body } = req

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
            return res.status(200).json({
                message: "Email Sent!"
            })
        })
        .catch((error) => {
            console.error(error)
            return res.status(500).json({
                message: "Email Not Sent: " + error
            })
        })
}

module.exports = allowCors(handler)
