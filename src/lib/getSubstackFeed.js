import axios from 'axios'

const substackRssFeed = 'https://mememail.substack.com/feed'
const rssToJsonApi = 'https://api.rss2json.com/v1/api.json'
const data = { params: { rss_url: substackRssFeed } }

export async function getSubstackFeed() {
  try {
    const substackRes = await axios.get(rssToJsonApi, data)
    console.log('Substack feed successfully retrieved', substackRes)

    return substackRes.data.items.map((article) => ({
      ...article,
      slug: article.link.split('/').pop(),
      date: article.description.split('- ').pop(),
    }))
  } catch (err) {
    console.log('Error retrieving Substack feed', err)
    return []
  }
}
