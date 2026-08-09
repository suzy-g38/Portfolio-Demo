function Footer() {
  return (
    <div className="bottom-container">
      <a className="footer-link" href="https://www.linkedin.com/">
        LinkedIn
      </a>
      <a className="footer-link" href="https://twitter.com/">
        Twitter
      </a>
      <a className="footer-link" href="https://github.com/">
        GitHub
      </a>
      <p className="copyright">© {new Date().getFullYear()} Jamie Chen.</p>
    </div>
  )
}

export default Footer
