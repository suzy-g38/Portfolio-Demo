function Footer() {
  return (
    <div className="bottom-container">
      <a className="footer-link" href="https://www.linkedin.com/in/sulagna-ghosh-7955361a7/">
        LinkedIn
      </a>
      <a className="footer-link" href="https://x.com/G38Suzy">
        X
      </a>
      <a className="footer-link" href="https://github.com/suzy-g38">
        GitHub
      </a>
      <p className="copyright">© {new Date().getFullYear()} Sulagna Ghosh.</p>
    </div>
  )
}

export default Footer
