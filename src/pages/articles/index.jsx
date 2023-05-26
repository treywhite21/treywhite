import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getSubstackFeed } from '@/lib/getSubstackFeed'
import { Button } from '@/components/Button'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {article.date}
        </Card.Eyebrow>
        <div className="flex justify-between">
          <div className="overflow-hidden pr-6">
            <Card.Description>{article.blurb}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
          </div>
          <img
            src={article.enclosure.link}
            alt={article.slug}
            className="z-10 h-32 w-32 rounded-lg"
          />
        </div>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {article.date}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Trey White</title>
        <meta
          name="description"
          content="A collection of stupid jokes, dumb memes, and insights from the day before... if you can even call them that."
        />
      </Head>
      <SimpleLayout
        title="A collection of stupid jokes, dumb memes, and insights from the day before... if you can even call them that."
        intro="In February of 2019, one of my best friends, Emma, and her family were caught off guard by an extremely painful and unforeseen event. The pain we watched them endure was unbearable. We decided the least we could do was send some jokes, memes, and whatever else every morning to, hopefully, help start her day off on a lighter note or, at least, serve as a distraction. Thus, Emma's Morning Wakeup."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
        <div className="mt-16 inline-flex w-full justify-center">
          <Button
            href="https://mememail.substack.com"
            className="justify-center !bg-transparent px-16 hover:!bg-zinc-50 dark:!bg-transparent hover:dark:!bg-zinc-800/50"
            variant="secondary"
            target="_blank"
          >
            Read more on Substack
          </Button>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getSubstackFeed()).map(({ component, ...meta }) => meta),
    },
  }
}
