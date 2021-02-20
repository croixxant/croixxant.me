import { useRouter } from 'next/router'
import data from '../../contents/articles/index.json'

const limit = 1

const Page = (props) => {
  const router = useRouter()
  const tag = router.query.tag
  const page = router.query.page
  const filterd = filter(data, tag)
  const result = paginate(filterd, page)

  if (result.length === 0) {
    return <div>Result 0.</div>
  }

  return (
    <div>
      Articles {!!tag && `in ${tag}`}
      {result.map((article) => (
        <div key={article.uuid}>{article.title}</div>
      ))}
    </div>
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
