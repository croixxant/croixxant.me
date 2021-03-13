import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import tw from 'twin.macro'
import { Sun, Moon } from './svg'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div tw="text-gray-600 dark:text-white inline-flex">
      {theme === 'dark' ? (
        <>
          <button tw="p-2 rounded-md hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none" onClick={() => setTheme('light')}>
            <span tw="sr-only">Light</span>
            <Sun />
          </button>
        </>
      ) : (
        <>
          <button tw="p-2 rounded-md hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none" onClick={() => setTheme('dark')}>
            <span tw="sr-only">Dark</span>
            <Moon />
          </button>
        </>
      )}
    </div>
  )
}

export default ThemeChanger
