import tw from 'twin.macro'
import { format } from '../utils/date'
import { Clock } from '../components/svg'
import Tag from './tag'

type Props = {
  context: string
  title: string
  contents: string
  tags: string[]
  createdAt: string
  description: string
}

const ContentsDetail = ({ context, title, contents, tags, createdAt, description }: Props) => {
  return (
    <div tw="relative py-12 bg-white overflow-hidden">
      <div tw="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div tw="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg tw="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" tw="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            tw="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" tw="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg tw="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" tw="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div tw="relative px-4 sm:px-6 lg:px-8">
        <div tw="text-lg max-w-prose mx-auto">
          <h1>
            {tags.length !== 0 && (
              <div tw="text-center mb-3">
                {tags.map((t, idx) => {
                  return <Tag key={idx} href={`/${context}?tag=${t}`} name={t} />
                })}
              </div>
            )}
            <span tw="block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</span>
            {createdAt !== '' && (
              <div tw="mt-3 flex items-center justify-end text-gray-400 text-base">
                <Clock />
                <span tw="ml-1">{format(new Date(createdAt))}</span>
              </div>
            )}
          </h1>
          {!!description && <p tw="mt-8 text-xl text-gray-500 leading-8">{description}</p>}
        </div>
        <div tw="mt-6 prose prose-indigo lg:prose-lg text-gray-500 mx-auto" dangerouslySetInnerHTML={{ __html: contents }}></div>
      </div>
    </div>
  )
}

export default ContentsDetail
