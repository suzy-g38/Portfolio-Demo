// TODO: Add your own skills below. Duplicate a .skill-row block
// if you want a third skill. (Same stretch goal as Stage 2: try
// refactoring this into a data array + reusable component.)
function Skills() {
  return (
    <div className="skills">
      <h2>My Skills.</h2>

      <div className="skill-row">
        <img className="image-computer" src="/images/computer.png" alt="" />
        <h3>Skill One</h3>
        <p>Describe this skill and your experience with it.</p>
      </div>

      <div className="skill-row">
        <img className="image-chillies" src="/images/chillies.png" alt="" />
        <h3>Skill Two</h3>
        <p>Describe this skill and your experience with it.</p>
      </div>
    </div>
  )
}

export default Skills
