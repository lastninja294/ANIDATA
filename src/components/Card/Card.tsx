import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

import { Card, CardDescription } from '../ui/card'
import { Badge } from '../ui/badge'

type CardProps = {
  image: string
  title: string
  badge: string
}

const VideoCard: React.FC<CardProps> = (props: CardProps) => {
  const { image, title, badge } = props
  return (
    <Card className="w-[100%] flex flex-col p-2 gap-2">
      <AspectRatio ratio={2 / 3}>
        <Image
          src={image}
          alt={title}
          className="rounded-md object-cover "
          fill
        />
      </AspectRatio>
      <div className="flex gap-2">
        <div>
          <Badge>{badge}</Badge>
        </div>
        <div>
          <Badge>{badge}</Badge>
        </div>
      </div>
      <p>{title}</p>
    </Card>
  )
}

export default VideoCard
