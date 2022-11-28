import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Card from '../components/Card'
import Layout from '../components/Layout/Layout'
// import {Header, Card, Layout} from '@components'

export default function Home() {
  return (
    <div className='m-10'>
      <Header />
      <Layout>
      </Layout>
    </div>
  )
}
