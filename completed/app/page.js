import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="middle-container">
        <About />
        <hr />
        <Skills />
        <hr />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
