import { useRouter } from 'next/router'
import * as matter from 'gray-matter'

const Page = (props) => {
  const router = useRouter()
  const { uuid } = router.query
  return <div>Article {uuid}</div>
}

export const getStaticProps = async ({ params }) => {
  const { default: article } = await import(`../../contents/articles/${params.uuid}.md`)
  const data = matter(article)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      uuid: data.data.uuid,
      title: data.data.title,
      content: data.content,
      tags: data.data.tags,
    },
  }
}

export async function getStaticPaths() {
  const { default: articles } = await import(`../../contents/articles/map.json`)
  const paths = articles.map(({ uuid }) => {
    return `/articles/${uuid}`
  })
  return {
    paths,
    fallback: false,
  }
}

export default Page
