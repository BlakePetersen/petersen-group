import fetch from 'node-fetch'
import { NextApiRequest, NextApiResponse } from 'next'
// import { runMiddleware } from 'artax-ui'
// import Cors from 'cors'
//
// const cors = Cors({
//   methods: ['GET', 'HEAD'],
// })

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  // await runMiddleware(request, response, cors)

  response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  const { screenName } = request.query
  const res = await fetch(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=1`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
      },
    },
  )

  const dataSet = await res.json()
  const data = dataSet[0]

  return response.status(200).json({
    handle: data.user.name,
    pfp: data.user.profile_image_url_https?.replace('_normal', '_bigger'),
    pfb:
      data.user.profile_banner_url &&
      `${data.user.profile_banner_url}/mobile_retina`,
    followers: data.user.followers_count,
    followings: data.user.friends_count,
    tweet: {
      text: data.text,
      time: data.created_at,
      url: data.entities.urls[0]?.url,
    },
  })
}

export default handler
