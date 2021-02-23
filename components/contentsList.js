import React, { useState } from 'react'
import tw from 'twin.macro'

const ContentsList = ({ contents }) => {
  return (
    <div tw="bg-white shadow overflow-hidden sm:rounded-md">
      <ul tw="divide-y divide-gray-200">
        {contents.map((c, idx) => {
          return (
            <li key={idx}>
              <a href={`/articles/${c.uuid}`} tw="block hover:bg-gray-50">
                <div tw="px-4 py-4 sm:px-6">
                  <div tw="sm:flex sm:items-center sm:justify-between">
                    <p tw="text-sm font-medium text-indigo-600 truncate">Back End Developer</p>
                    <div tw="sm:ml-2 sm:flex-shrink-0 sm:flex">
                      {c.tags.map((name, idx2) => {
                        return (
                          <a
                            key={idx2}
                            href={`/articles?tag=${name}`}
                            tw="ml-2 first:ml-0 mt-2 sm:mt-0 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            {name}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                  <div tw="mt-2 sm:flex sm:justify-between">
                    <div tw="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <svg
                        tw="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>
                        Closing on
                        <time dateTime="2020-01-07">January 7, 2020</time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ContentsList
