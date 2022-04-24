import { Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import CompetitiveAdvantage from '../components/CompetitiveAdvantage'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import FAQs from '../components/FAQs'
import styles from '../styles/Home.module.css'
import Signup from '../components/Signup'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Kuleni</title>
      </Head>
      <Header/>
      <Signup/>
      <Features/>
      <CompetitiveAdvantage/>
      <FAQs/>
      <Footer/>

    </div>
  )
}
