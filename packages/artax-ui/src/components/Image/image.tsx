import Image, { ImageProps } from 'next/image'

export const ArtaxImage = ({ src, ...props }: ImageProps) => {
  return <Image src={src} objectFit={`contain`} {...props} />
}
