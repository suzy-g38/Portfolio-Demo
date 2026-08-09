function Footer() {
  return (
    <div className="bottom-container">
      <a className="footer-link" href="https://www.linkedin.com/">
        LinkedIn
      </a>
      <a className="footer-link" href="https://twitter.com/">
        Twitter
      </a>
      <a className="footer-link" href="https://github.com/suzy-g38">
        GitHub
      </a>
      <p className="copyright">© {new Date().getFullYear()} Sulagna Ghosh.</p>
    </div>
  )
}

export default Footer
