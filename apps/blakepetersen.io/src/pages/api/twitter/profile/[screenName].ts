import fetch from 'node-fetch'
import { NextApiRequest, NextApiResponse } from 'next'
// import { runMiddleware } from 'artax-ui'
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  // await runMiddleware(request, response, cors)

  response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  const { screenName } = request.query
  const res = await fetch(
    `https://api.twitter.com/1.1/users/show.json?screen_name=${screenName}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
      },
    },
  )

  const data = await res.json()
  return response.status(200).json({
    handle: data.name,
    pfp: data.profile_image_url_https.replace('_normal', '_bigger'),
  })
}

export default handler
