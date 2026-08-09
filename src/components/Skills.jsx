import Skill from './Skill'

// Stage 1 and the React starter both hardcode two near-identical
// blocks of markup for this section. Once you have more than one or
// two of something, that's the "why React" moment: describe the data,
// then map it to a component. Add a third skill by adding one more
// object to this array — no markup to copy-paste.
const skills = [
  {
    id: 'html-css-js',
    image: './images/computer.png',
    imageClass: 'image-computer',
    title: 'HTML, CSS & JavaScript',
    description:
      'The foundation of everything on the web. I can build responsive layouts from scratch and bring them to life with vanilla JS — no framework required.',
  },
  {
    id: 'git-deploy',
    image: './images/chillies.png',
    imageClass: 'image-chillies',
    title: 'Git & Deployment',
    description:
      'Comfortable with branches, pull requests, and shipping static sites to GitHub Pages or Vercel — from first commit to live URL.',
  },
]

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills.</h2>
      {skills.map((skill) => (
        <Skill key={skill.id} {...skill} />
      ))}
    </div>
  )
}

export default Skills
