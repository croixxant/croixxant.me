import { format } from '../utils/date'
import Link from 'next/link'
import Tag from './tag'
import type { Summary } from '../types/contents'

type Props = {
  contents: Summary[]
  context: string
}

const ContentsList = ({ contents, context }: Props) => {
  return (
    <div className="text-gray-600 dark:text-white overflow-hidden max-w-screen-xl mx-auto">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="-my-8 divide-y-2 divide-gray-200 dark:divide-gray-600">
          {contents.map((c, cidx) => {
            const tags = c.tags ?? []
            const createdAt = c.createdAt ?? ''
            return (
              <div key={cidx} className="py-4 md:py-6 flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-56 md:mb-0 mb-2 flex-shrink-0 flex">
                  <span className="mt-1 text-gray-500 dark:text-white text-sm">{createdAt !== '' && format(new Date(createdAt))}</span>
                </div>
                <div className="md:flex-grow">
                  {tags.length !== 0 && (
                    <div className="mb-2">
                      {tags.map((t, tidx) => {
                        return <Tag key={tidx} href={`/${context}?tag=${t}`} name={t} />
                      })}
                    </div>
                  )}
                  <Link href={`/${context}/${c.uuid}`} passHref>
                    <a className="text-2xl font-medium text-gray-900 dark:text-white">{c.title}</a>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ContentsList
