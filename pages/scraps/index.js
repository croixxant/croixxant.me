import { useRouter } from 'next/router'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/breadcrumbs'
import ContentsList from '../../components/contentsList'
import Pagination from '../../components/pagination'
import data from '../../contents/scraps/index.json'
import Error from 'next/error'

const limit = 10

const Page = (props) => {
  const router = useRouter()
  const tag = router.query.tag
  const currentPage = parseInt(router.query.page) ? parseInt(router.query.page) : 1
  const filtered = filter(data, tag)
  const contentsLen = filtered.length
  const result = paginate(filtered, currentPage)
  const breadcrumbs = [{ title: 'Scraps', link: '/scraps' }]

  if (result.length === 0) {
    return <Error statusCode={404} />
  }

  return (
    <Layout>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ContentsList contents={result} context="scraps" />
      <Pagination all={contentsLen} limit={limit} current={currentPage} />
    </Layout>
  )
}

const filter = (data, tagName) => {
  if (!tagName) {
    return data
  }
  return data.filter((article) => {
    const idx = article.tags.findIndex((name) => {
      return name === tagName
    })
    return idx !== -1
  })
}

const paginate = (data, page) => {
  if (!page) {
    return data.slice(0, limit)
  }
  return data.slice(page * limit - limit, page * limit)
}

export default Page
