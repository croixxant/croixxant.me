import { useRouter } from 'next/router'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/breadcrumbs'
import ContentsList from '../../components/contentsList'
import Pagination from '../../components/pagination'
import data from '../../contents/articles/index.json'
import Error from 'next/error'
import type { Summary } from '../../types/contents'

const limit = 10

const Page = (_) => {
  const q = useRouter().query
  const tag = typeof q.tag === 'string' ? q.tag : ''
  const currentPageStr = typeof q.page === 'string' ? q.page : '1'
  const currentPage = parseInt(currentPageStr) || 1
  const filtered = filter(data, tag)
  const contentsLen = filtered.length
  const result = paginate(filtered, currentPage)
  const breadcrumbs = [{ title: 'Articles', link: '/articles' }]

  if (result.length === 0) {
    return <Error statusCode={404} />
  }

  return (
    <Layout>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ContentsList contents={result} context="articles" />
      <Pagination all={contentsLen} limit={limit} current={currentPage} />
    </Layout>
  )
}

const filter = (data: Summary[], tagName: string) => {
  if (tagName === '') {
    return data
  }
  return data.filter((article) => {
    const idx = article.tags.findIndex((name) => {
      return name === tagName
    })
    return idx !== -1
  })
}

const paginate = (data: Summary[], page: number) => {
  return data.slice(page * limit - limit, page * limit)
}

export default Page
