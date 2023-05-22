import { getSubstackFeed } from './getSubstackFeed'

export async function getSubstackPost(slug) {
  try {
    const feed = await getSubstackFeed()
    const posts = feed.filter((post) => post.slug === slug)
    // console.log('Substack post successfully retrieved' posts)

    return posts.length ? posts[0] : null
  } catch (err) {
    console.log('Error retrieving Substack post', err)
    return null
  }
}
