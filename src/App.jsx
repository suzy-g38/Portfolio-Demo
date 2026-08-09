import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Hero theme={theme} onToggleTheme={toggleTheme} />
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
