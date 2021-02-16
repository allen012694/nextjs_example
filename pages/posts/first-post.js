import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Layout from '../../components/layout'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Hello cowboy</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/haha.jpg" // Route of the image file
        // layout="fill"
        height={1080} // Desired size with correct aspect ratio
        width={1080*11/9} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Layout>
  )
}
