import { Frame } from '@/components/Frame'

const PhotographyServicesPage = ({ params }) => {
  const { slug = '' } = params
  return <Frame>slug: {slug}</Frame>
}

export default PhotographyServicesPage
