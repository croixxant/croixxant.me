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
  const url = `${defaultHostname}${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      <link rel="icon" type="image/png" href={`${defaultHostname}/icons/16x16.png`} sizes="16x16" />
      <link rel="icon" type="image/png" href={`${defaultHostname}/icons/32x32.png`} sizes="32x32" />
      <meta name="apple-mobile-web-app-title" content={defaultTitle} />
      <link rel="apple-touch-icon" type="image/png" href={`${defaultHostname}/icons/180x180.png`} sizes="180x180" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={path === '/' ? 'website' : 'article'} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${defaultHostname}/icons/512x512.png`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@croixxxant" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#FA742B" />
    </Head>
  )
}

export default H
