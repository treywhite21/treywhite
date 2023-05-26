import Link from 'next/link'
import clsx from 'clsx'

function ArrowRightIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="ml-1 h-4 w-4 stroke-current"
    >
      <path
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  )
}

export function SubstackLink({ ...props }) {
  return (
    <div className="relative z-10 mt-4 flex w-full items-center text-sm font-medium text-teal-500 hover:text-teal-400">
      <Link
        href="https://mememail.substack.com"
        target="_blank"
        className="inline-flex items-center justify-center"
        {...props}
      >
        Read more
        <ArrowRightIcon />
      </Link>
    </div>
  )
}
