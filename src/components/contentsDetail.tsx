import { format } from '../lib/date'
import { Clock } from './svg'
import Tag from './tag'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

const components = {}

type Props = {
  context: string
  title: string
  contents: MDXRemoteSerializeResult
  tags: string[]
  createdAt: string
  description: string
}

const ContentsDetail = ({ context, title, contents, tags, createdAt, description }: Props) => {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-gray-600" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-gray-600" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-gray-600" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            {tags.length !== 0 && (
              <div className="text-center mb-3">
                {tags.map((t, idx) => {
                  return <Tag key={idx} href={`/${context}?tag=${t}`} name={t} />
                })}
              </div>
            )}
            <span
              className="block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl
            text-gray-900 dark:text-white"
            >
              {title}
            </span>
            {createdAt !== '' && (
              <div
                className="mt-3 flex items-center justify-end text-base
              text-gray-400 dark:text-white"
              >
                <Clock />
                <span className="ml-1">{format(new Date(createdAt))}</span>
              </div>
            )}
          </h1>
          {!!description && <p className="text-gray-500 dark:text-white mt-8 text-xl leading-8">{description}</p>}
        </div>
        <div className="mt-6 text-gray-500 prose prose-indigo dark:prose-dark lg:prose-lg mx-auto">
          <MDXRemote {...contents} components={components} />
        </div>
      </div>
    </div>
  )
}

export default ContentsDetail
