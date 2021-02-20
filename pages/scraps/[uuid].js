import { useRouter } from 'next/router'
import * as matter from 'gray-matter'

const Page = (props) => {
  const router = useRouter()
  const { uuid } = router.query
  return <div>Scrap {uuid}</div>
}

export const getStaticProps = async ({ params }) => {
  const { default: scrap } = await import(`../../contents/scraps/${params.uuid}.md`)
  const { content, data } = matter(scrap)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      uuid: data.uuid,
      title: data.title,
      content: content,
      tags: data.tags,
    },
  }
}

export async function getStaticPaths() {
  const { default: scraps } = await import(`../../contents/scraps/index.json`)
  const paths = scraps.map(({ uuid }) => {
    return `/scraps/${uuid}`
  })
  return {
    paths,
    fallback: false,
  }
}

export default Page
