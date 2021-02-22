import { useRouter } from 'next/router'

const Page = (props) => {
  const router = useRouter()
  const { uuid } = router.query
  return <div>Scrap {uuid}</div>
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
