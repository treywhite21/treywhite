import axios from 'axios'

const substackRssFeed = 'https://mememail.substack.com/feed'
const rssToJsonApi = 'https://api.rss2json.com/v1/api.json'
const data = { params: { rss_url: substackRssFeed } }

const getBlurb = (str) => {
  // Clean string of html tags and line break characters
  const cleanedStr = str.replace(/(<([^>]+)>)/gi, '').replace(/\n/gi, ' ')

  // Find index of start of content (always starts with "Happy [day of week]!")
  var match = /(Happy)(.*)(!)/.exec(cleanedStr)
  if (match) {
    const contentIdx = match.index
    return cleanedStr.substring(contentIdx).substring(0, 200) + '...'
  }

  return 'No description provided'
}

export async function getSubstackFeed() {
  try {
    const substackRes = await axios.get(rssToJsonApi, data)
    // console.log('Substack feed successfully retrieved', substackRes)

    return substackRes.data.items.map((article) => ({
      ...article,
      slug: article.link.split('/').pop(),
      date: article.description.split('- ').pop(),
      blurb: getBlurb(article.content),
    }))
  } catch (err) {
    console.log('Error retrieving Substack feed', err)
    return []
  }
}
