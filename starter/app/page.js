import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Same component breakdown as Stage 2's React version. The big
// difference: by default, every component here runs on the server
// and ships as plain HTML — no React JS bundle needed just to
// render this page. We'll only reach for client-side JS where we
// actually need interactivity (see the dark-mode toggle in complete/).
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
