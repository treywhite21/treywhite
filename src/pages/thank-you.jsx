import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Trey White</title>
        <meta
          name="description"
          content="Thanks for subscribing to my morning emails."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing to my morning emails."
        intro="You'll get a copy sent to your inbox whenever I publish an article of Emma's Morning Wakeup. I aim for three or more per week, but some weeks I'm more on-the-ball than others. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
