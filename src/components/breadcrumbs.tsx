import tw from 'twin.macro'
import Link from 'next/link'
import { Home, Right } from './svg'

type Props = {
  breadcrumbs: Breadcrumb[]
}

type Breadcrumb = {
  title: string
  link: string
}

const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <nav tw="flex border-b-2 border-gray-200 dark:border-gray-600" aria-label="Breadcrumb">
      <ol tw="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8 overflow-scroll">
        <li tw="flex">
          <div tw="flex items-center">
            <Link href="/" passHref>
              <a tw="text-gray-400 hover:text-gray-500 dark:text-white hover:dark:text-gray-200">
                <Home />
                <span tw="sr-only">Home</span>
              </a>
            </Link>
          </div>
        </li>
        {breadcrumbs.map(({ title, link }, idx) => {
          return (
            <li key={idx} tw="flex last:pr-2">
              <div tw="flex items-center">
                <Right />
                <Link href={link} passHref>
                  <a
                    tw="ml-4 text-sm font-medium truncate
                  text-gray-500 hover:text-gray-700
                  dark:text-white hover:dark:text-gray-200"
                  >
                    {title}
                  </a>
                </Link>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
