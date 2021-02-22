import { useRouter } from 'next/router'
import Layout from '../../components/layout'

const Page = (props) => {
  const router = useRouter()
  const { uuid } = router.query
  return (
    <Layout>
      Scrap {uuid}
      <div dangerouslySetInnerHTML={{ __html: props.contents }}></div>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { default: scrap } = await import(`../../contents/scraps/${params.uuid}.md`)
  const { contents, data } = processor.processSync(scrap)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      uuid: data.frontmatter.uuid,
      title: data.frontmatter.title,
      contents: contents,
      tags: data.frontmatter.tags,
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
