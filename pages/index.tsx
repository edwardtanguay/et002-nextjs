import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello Next.js 👋</h1>
    <p>goto <Link href="/about">About</Link> or to <Link href="/users">Users List</Link></p>
  </Layout>
)

export default IndexPage
