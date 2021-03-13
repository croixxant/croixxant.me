import tw from 'twin.macro'
import Link from 'next/link'

type Props = {
  href: string
  name: string
}

const Tag = ({ href, name }: Props) => {
  return (
    <Link href={href} passHref>
      <a
        tw="mr-3 last:mr-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium 
      bg-gray-100 text-gray-800 
      dark:bg-gray-700 dark:text-white"
      >
        {name}
      </a>
    </Link>
  )
}
export default Tag
