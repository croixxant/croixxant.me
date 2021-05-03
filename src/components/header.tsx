import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { GitHub, Twitter, Menu, X } from './svg'
import ThemeChanger from './themeChanger'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative border-b-2 border-gray-200 dark:border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex justify-between items-center md:justify-start md:space-x-10">
          <div className="flex justify-start">
            <Link href="/" passHref>
              <a>
                <span
                  className="text-lg font-bold 
                text-gray-600 hover:text-gray-900
                dark:text-white dark:hover:text-gray-200"
                >
                  Croixxant.me
                </span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange
              bg-white text-gray-400 hover:bg-gray-100
              dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/articles" passHref>
              <a
                className="text-base font-medium 
              text-gray-500 hover:text-gray-900
              dark:text-white dark:hover:text-gray-200"
              >
                Articles
              </a>
            </Link>
            <Link href="/notes" passHref>
              <a
                className="text-base font-medium
              text-gray-500 hover:text-gray-900
              dark:text-white  dark:hover:text-gray-200"
              >
                Notes
              </a>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ThemeChanger />
            <a
              className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium
              text-white bg-black hover:text-gray-200"
              href="https://github.com/croixxant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub height={20} width={20} />
              <span className="ml-1">GitHub</span>
            </a>
            <a
              className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium
              text-white bg-twitter hover:text-gray-200"
              href="https://twitter.com/croixxxant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter height={20} width={20} />
              <span className="ml-2">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2
          bg-white divide-gray-50
          dark:bg-gray-800 dark:divide-gray-700"
        >
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/" passHref>
                  <a>
                    <span
                      className="text-lg font-bold
                      text-gray-600 hover:text-gray-900
                      dark:text-white dark:hover:text-gray-200"
                    >
                      Croixxant.me
                    </span>
                  </a>
                </Link>
              </div>
              <div className="-mr-2 flex space-x-2">
                <ThemeChanger />
                <button
                  type="button"
                  className="rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange
                    bg-white text-gray-400 hover:bg-gray-100
                    dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Close menu</span>
                  <X />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                <Link href="/articles" passHref>
                  <a
                    className="w-full flex px-4 py-2 text-base font-medium rounded-md
                    text-gray-900 hover:bg-gray-50
                    dark:text-white dark:hover:bg-gray-700"
                  >
                    Articles
                  </a>
                </Link>
                <Link href="/notes" passHref>
                  <a
                    className="w-full flex px-4 py-2 text-base font-medium rounded-md
                    text-gray-900 hover:bg-gray-50
                    dark:text-white dark:hover:bg-gray-700"
                  >
                    Notes
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-4 px-5">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium
                  text-white bg-black hover:text-gray-200"
                href="https://github.com/croixxant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub height={20} width={20} />
                <span className="ml-1">GitHub</span>
              </a>
              <a
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium
                  text-white bg-twitter hover:text-gray-200"
                href="https://twitter.com/croixxxant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter height={20} width={20} />
                <span className="ml-2">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Header
