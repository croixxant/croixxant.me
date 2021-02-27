import React, { useState } from 'react'
import tw from 'twin.macro'
import Tag from './tag'

const ContentsList = ({ contents }) => {
  return (
    <section tw="text-gray-600 overflow-hidden">
      <div tw="container px-5 py-8 md:py-12 mx-auto">
        <div tw="-my-8 divide-y-2 divide-gray-100">
          {contents.map((c, cidx) => {
            return (
              <div key={cidx} tw="py-4 md:py-6 flex flex-wrap md:flex-nowrap">
                <div tw="w-full md:w-56 md:mb-0 mb-2 flex-shrink-0 flex">
                  <span tw="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div tw="md:flex-grow">
                  <div tw="mb-2">
                    {c.tags.map((t, tidx) => {
                      return <Tag key={tidx} href="#" name={t} />
                    })}
                  </div>
                  <a href="#" tw="text-2xl font-medium text-gray-900">
                    {c.title}
                  </a>
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
