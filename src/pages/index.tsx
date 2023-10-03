import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import { AspectRatio } from '~/components/ui/aspect-ratio'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import VideoCard from '~/components/Card/Card'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)

  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        <VideoCard
          image="/media/live.webp"
          title="qwertyuiopsdfghjkl;"
          badge={'hello'}
        />
        <VideoCard
          image="/media/live.webp"
          title="qwertyuiopsdfghjkl;"
          badge={'hello'}
        />
        <VideoCard
          image="/media/live.webp"
          title="qwertyuiopsdfghjkl;"
          badge={'hello'}
        />
      </div>
    </>
  )
}
