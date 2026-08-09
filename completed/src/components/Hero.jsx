function Hero({ theme, onToggleTheme }) {
  return (
    <div className="top-container">
      <button id="theme-toggle" aria-label="Toggle dark mode" onClick={onToggleTheme}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <img id="top-cloud" src="./images/cloud.png" alt="cloud" />
      <h1>I'm Sulagna</h1>
      <h3>Solutions Engineer &amp; React Kolkata Organiser</h3>
      <img id="bottom-cloud" src="./images/cloud.png" alt="cloud" />
      <img id="mountain" src="./images/mountain.png" alt="mountain" />
    </div>
  )
}

export default Hero
