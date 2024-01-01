import Container from '@/components/layout/container'
import PostBody from '@/components/post/post-body'
import PostHeader from '@/components/post/post-header'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import type PostType from '@/interfaces/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default async function Post({ params }: { params: { slug: string }}) {
  const { post } = await getProps({params}) as unknown as Props
  // todo:fallback

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`
  return (
    <>
      <Container>
        <div className='flex justify-center mb-32 '>
          <article className="prose prose-xl">
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={post.ogImage?.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
            />
            <PostBody content={post.content} />
          </article>
        </div>
      </Container>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

async function getProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    post: {
      ...post,
      content,
    },
  }
}

async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
