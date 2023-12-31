import Container from '@/components/layout/container'
import { getAllPosts } from '@/lib/api'
import { CMS_NAME } from '@/lib/constants'
import Post from '@/interfaces/post'
import { PostCard } from '@/components/domain/PostCard'

// {`Next.js Blog Example with ${CMS_NAME}`}

export default async function Index() {
  const allPosts = await getProps() as unknown as Post[]
  const morePosts = allPosts.slice(1)
  
  return (
    <Container>
      {morePosts.length > 0 && <PostCard posts={morePosts} />}
    </Container>
  )
}

async function getProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return allPosts
}