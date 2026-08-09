import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

// This is the big "why React" idea: instead of one long HTML file,
// the page is built from small, reusable pieces (components) that
// each own their own markup. App just lays them out in order.
function App() {
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

export default App
