import { ArticleLayout } from '@/components/ArticleLayout'
import { getSubstackPost } from '@/lib/getSubstackPost'

export default function ArticlePage({ article }) {
  const meta = {
    author: 'Trey White',
    date: article.date,
    title: article.title,
    description: article.description,
  }

  return (
    <ArticleLayout meta={meta}>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </ArticleLayout>
  )
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      article: await getSubstackPost(params.slug),
    },
  }
}
