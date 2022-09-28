import Head from 'next/head'
import { NextPageWithLayout } from '@/types/next/type'
import { Layout } from '@/components/layouts'
import { Main } from "@/components/templates/Main"

const IndexPage: NextPageWithLayout = () => <Main />

IndexPage.getLayout = Layout;

export default IndexPage
