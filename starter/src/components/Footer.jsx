// TODO: Update the links and your name below.
//
// Notice there's no separate "script.js" finding an element by id
// and setting its text — in React you just put the JS expression
// straight in the markup with {curly braces}. That's the big
// difference from Stage 1's DOM manipulation.
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
      <p className="copyright">© {new Date().getFullYear()} Your Name.</p>
    </div>
  )
}

export default Footer
