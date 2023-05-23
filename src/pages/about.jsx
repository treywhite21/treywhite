import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  SubstackIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/image-about.jpeg'

function SocialLink({ className, href, children, icon: Icon, size }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon
          className={clsx(
            'flex-none fill-zinc-500 transition group-hover:fill-teal-500',
            size === 'sm' ? 'ml-0.5 mt-0.5 h-5 w-5' : 'h-6 w-6'
          )}
        />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Trey White</title>
        <meta
          name="description"
          content="I'm Trey White. I live in San Diego, where I try to build cool stuff that makes peoples' lives easier."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Trey White. I live in San Diego, where I try to catch some
              waves in between building stuff I think is cool.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I've loved making things for as long as I can remember. I think
                most people my age spent many of their formative years attending
                the LEGO school of construction.
              </p>
              <p>
                As I grew out of childhood and playing with blocks, I fell in
                love with technology. Honestly, it's a lot like construction
                except my supplies are infinite and my crane, hammer, etc. is a
                keyboard on a laptop that I can take with me anywhere.
              </p>
              <p>
                I was lucky enough to attend a high school with a speciality
                center for information technology where I fell deeper into
                technology's grip as I started programming. I continued this
                throughout my college years at Virginia Tech.
              </p>
              <p>
                After college, I went to Washington, DC to work for Deloitte
                Consulting where I had a nice variation in types of projects and
                experiences. The nature of consulting was great in terms of
                exposure to different organizations and styles of work, but
                tended to be slower than I prefered, filled with governmental
                red tape, and higher ups trying harder to sell work than to
                solve problems.
              </p>
              <p>
                So when my girlfriend at the time, now wife, decided to travel
                nurse. I saw it as an opportunity to make a 180.
              </p>
              <p>
                I had been attending real estate investment masterminds with my
                dad for a few years at this point and, it was obvious to me
                that, there was a need for software to save these investors.
                They had no idea where to begin with organizing, tracking, and
                managing their investment portfolios.
              </p>
              <p>
                This seemed like an opportunity to help people with the skills I
                had and none of the slow-pace and red tape of my job at the
                time. My girlfiend and I soon left for Nashville, TN where she
                would start her journey as a travel nurse and I would create my
                company, RealNumberz, with my dad as the idea guy and myself as
                the tech nerd.
              </p>
              <p>
                Starting a new company with absolutely zero-guidance is a
                daunting but exciting experience. I loved designing and building
                the product itself, but my original assumption that users would
                come running to me waving money in my face and asking to pay
                me... turned out wasn't <em>exactly</em> correct.
              </p>
              <p>
                To address this, I dove into learning all things business and we
                made changes to the marketing and sales aspects. People began
                using and paying for the app. It was an amazing feeling, but
                great feelings don't pay the rent, and working in a team of one
                gets lonely.
              </p>
              <p>
                As my girlfriend's nursing contract in Nashville was expiring
                she signed a new contract in Seattle, WA. I decided to interview
                with some big tech companies. I knew what I wanted to do at this
                point, and I wanted to do it with the smartest people to learn
                from them and build better products.
              </p>
              <p>
                I began working for Microsoft which was great. Even through
                COVID and riots in Seattle, I loved my life (for a multitude of
                reasons). I did this for two years until my manager wanted me to
                come back into the office. This was at the same time that my
                girlfriend had started a new nursing contract in San Diego, CA.
              </p>
              <p>
                We had fallen in love with San Diego. Our dog had fallen in love
                with the beach. I couldn't go back.
              </p>
              <p>
                I left Microsoft and began working for Google. I've been there
                ever since. It's been an amazing experience, and I'm happier
                than I've ever been. I'll talk your ear off about it and annoy
                the heck out of you, if you want me to.
              </p>
              <p>
                Oh, and the cherry on top: my dad and I rebranded the company I
                started in Nashville from RealNumberz to REI Copilot, and it's
                now running itself with the user base growing and helping more
                people than ever.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://mememail.substack.com/"
                aria-label="Follow on Substack"
                icon={SubstackIcon}
                size="sm"
              >
                Follow on Substack
              </SocialLink>
              <SocialLink
                href="https://github.com/treywhite21"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on Github
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/whitepr/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:trey@reicopilot.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                trey@reicopilot.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
