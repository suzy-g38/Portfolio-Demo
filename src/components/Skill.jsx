// A small, reusable piece: give it different props and it renders a
// different skill row. This is the payoff for componentizing —
// Skills.jsx below no longer repeats this markup by hand.
function Skill({ image, imageClass, title, description }) {
  return (
    <div className="skill-row">
      <img className={imageClass} src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Skill
