import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  title?: string
}

const H = (props: Props) => {
  const defaultTitle = 'Croixxant.me'
  const defaultHostname = process.env.ASSETS_HOSTNAME ?? 'https://croixxant.me'
  const title = !!props.title ? `${props.title} - ${defaultTitle}` : defaultTitle
  const path = useRouter().asPath
  const url = path === '/' ? defaultHostname : `${defaultHostname}/${path}`
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={`${defaultHostname}/icon.png`} />
      <meta name="apple-mobile-web-app-title" content={defaultTitle} />
      <link rel="apple-touch-icon" href={`${defaultHostname}/icon.png`} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={path === '/' ? 'website' : 'article'} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${defaultHostname}/icon.png`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@croixxxant" />
    </Head>
  )
}

export default H
