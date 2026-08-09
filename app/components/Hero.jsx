import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

// next/image needs real width/height (or `fill`) so it can reserve
// space for the image before it loads, preventing layout shift.
// Compare to Stages 1 & 2's plain <img> tags, which have no such
// guarantee.
function Hero() {
  return (
    <div className="top-container">
      <ThemeToggle />
      <Image
        id="top-cloud"
        src="/images/cloud.png"
        alt="cloud"
        width={150}
        height={48}
      />
      <h1>I&apos;m Jamie</h1>
      <h3>a frontend developer</h3>
      <Image
        id="bottom-cloud"
        src="/images/cloud.png"
        alt="cloud"
        width={150}
        height={48}
      />
      <Image
        id="mountain"
        src="/images/mountain.png"
        alt="mountain"
        width={598}
        height={357}
        priority
      />
    </div>
  )
}

export default Hero
