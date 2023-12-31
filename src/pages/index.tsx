import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import { PostCard } from '../components/domain/PostCard'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  
  return (
    <Layout >
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        {morePosts.length > 0 && <PostCard posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
