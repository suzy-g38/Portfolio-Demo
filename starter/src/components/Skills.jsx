// TODO: Add your own skills below. Duplicate a .skill-row block
// if you want a third skill.
//
// STRETCH GOAL (this is where React really shines): once you have
// this working, try turning these two hardcoded blocks into an
// array of skill objects + a reusable <Skill /> component that you
// .map() over. Peek at ../src/components/Skills.jsx (this branch's root)
// after you've given it a try.
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
