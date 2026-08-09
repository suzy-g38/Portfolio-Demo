// TODO: Update the links and your name below.
//
// TODO (stretch goal): Next.js turns folders into routes. Try adding
// a second page: create app/projects/page.js (copy the shape of
// app/page.js) and it's automatically live at /projects — no router
// library, no config. Then swap this footer's plain <a> tags for
// Next's <Link href="/projects"> (import Link from 'next/link') to
// link to it without a full page reload. See ../ (this branch's root) for
// a working example.
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
