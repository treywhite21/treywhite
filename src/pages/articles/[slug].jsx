import { ArticleLayout } from '@/components/ArticleLayout'
import { Button } from '@/components/Button'
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
      <div className="mt-16 inline-flex w-full justify-center">
        <Button
          href="https://mememail.substack.com"
          className="justify-center !bg-transparent px-16 no-underline hover:!bg-zinc-50 dark:!bg-transparent hover:dark:!bg-zinc-800/50"
          variant="secondary"
          target="_blank"
        >
          Read more on Substack
        </Button>
      </div>
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
