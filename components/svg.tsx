import tw from 'twin.macro'

import MenuSVG from '../assets/svg/menu.svg'
import XSVG from '../assets/svg/x.svg'
import BookSVG from '../assets/svg/book.svg'
import TrashSVG from '../assets/svg/trash.svg'
import HomeSVG from '../assets/svg/home.svg'
import ChevronRightSVG from '../assets/svg/chevron-right.svg'
import ChevronLeftSVG from '../assets/svg/chevron-left.svg'
import GitHubSVG from '../assets/svg/github.svg'
import TwitterSVG from '../assets/svg/twitter.svg'
import ClockSVG from '../assets/svg/clock.svg'
import RightSVG from '../assets/svg/right.svg'

export const Menu = () => {
  return <MenuSVG tw="h-6 w-6" />
}

export const X = () => {
  return <XSVG tw="h-6 w-6" />
}

export const Book = () => {
  return <BookSVG tw="flex-shrink-0 h-6 w-6" />
}

export const Trash = () => {
  return <TrashSVG tw="flex-shrink-0 h-6 w-6" />
}

export const Home = () => {
  return <HomeSVG tw="flex-shrink-0 h-5 w-5" />
}

export const Right = () => {
  return <RightSVG tw="flex-shrink-0 w-6 h-full text-gray-200" />
}

export const ChevronRight = () => {
  return <ChevronRightSVG tw="flex-shrink-0 h-6 w-6" />
}

export const ChevronLeft = () => {
  return <ChevronLeftSVG tw="h-5 w-5" />
}

type Props = {
  height: number
  width: number
  fill?: string
}

export const GitHub = ({ height, width, fill }: Props) => {
  return <GitHubSVG height={height} width={width} fill={fill || 'currentColor'} />
}

export const Twitter = ({ height, width, fill }: Props) => {
  return <TwitterSVG height={height} width={width} fill={fill || 'currentColor'} />
}

export const Clock = () => {
  return <ClockSVG tw="h-5 w-5" />
}
