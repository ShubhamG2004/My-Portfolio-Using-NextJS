import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Experience from '@/components/Experience'
import Award from '@/components/Awards'
import Education from '@/components/Education'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Gavade | Portfolio</title>
        <meta name="description" content="Web & Android Developer Portfolio" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills/>
      <Award />
      <Contact />
    </>
  )
}
