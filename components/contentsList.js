import React from 'react'
import tw from 'twin.macro'
import { format } from '../utils/date'
import Link from 'next/link'
import Tag from './tag'

const ContentsList = ({ contents, context }) => {
  return (
    <section tw="text-gray-600 overflow-hidden max-w-screen-xl mx-auto">
      <div tw="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div tw="-my-8 divide-y-2 divide-gray-100">
          {contents.map((c, cidx) => {
            return (
              <div key={cidx} tw="py-4 md:py-6 flex flex-wrap md:flex-nowrap">
                <div tw="w-full md:w-56 md:mb-0 mb-2 flex-shrink-0 flex">
                  <span tw="mt-1 text-gray-500 text-sm">{!!c.createdAt && format(new Date(c.createdAt))}</span>
                </div>
                <div tw="md:flex-grow">
                  <div tw="mb-2">
                    {c.tags.map((t, tidx) => {
                      return <Tag key={tidx} href={`/${context}?tag=${t}`} name={t} />
                    })}
                  </div>
                  <Link href={`/${context}/${c.uuid}`} passHref>
                    <a tw="text-2xl font-medium text-gray-900">{c.title}</a>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContentsList
