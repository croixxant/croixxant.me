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
import MoonSVG from '../assets/svg/moon.svg'
import SunSVG from '../assets/svg/sun.svg'

export const Menu = () => {
  return <MenuSVG className="h-6 w-6" />
}

export const X = () => {
  return <XSVG className="h-6 w-6" />
}

export const Book = () => {
  return <BookSVG className="flex-shrink-0 h-6 w-6" />
}

export const Trash = () => {
  return <TrashSVG className="flex-shrink-0 h-6 w-6" />
}

export const Home = () => {
  return <HomeSVG className="flex-shrink-0 h-5 w-5" />
}

export const Right = () => {
  return <RightSVG className="flex-shrink-0 w-6 h-full text-gray-200 dark:text-gray-600" />
}

export const ChevronRight = () => {
  return <ChevronRightSVG className="flex-shrink-0 h-6 w-6" />
}

export const ChevronLeft = () => {
  return <ChevronLeftSVG className="h-5 w-5" />
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
  return <ClockSVG className="h-5 w-5" />
}

export const Moon = () => {
  return <MoonSVG className="h-6 w-6" />
}

export const Sun = () => {
  return <SunSVG className="h-6 w-6" />
}
