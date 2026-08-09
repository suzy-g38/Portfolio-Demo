import Link from 'next/link'

// Link vs. <a>: external destinations (LinkedIn, GitHub) stay plain
// <a> tags. The internal /projects route uses next/link's <Link>,
// which prefetches the page and navigates without a full reload —
// only possible because /projects is a route Next.js knows about
// (it's the app/projects/page.js file).
function Footer() {
  return (
    <div className="bottom-container">
      <Link className="footer-link" href="/projects">
        Projects
      </Link>
      <a className="footer-link" href="https://www.linkedin.com/">
        LinkedIn
      </a>
      <a className="footer-link" href="https://github.com/suzy-g38">
        GitHub
      </a>
      <p className="copyright">© {new Date().getFullYear()} Sulagna Ghosh.</p>
    </div>
  )
}

export default Footer
