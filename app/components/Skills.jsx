import Skill from './Skill'

const skills = [
  {
    id: 'html-css-js',
    image: '/images/computer.png',
    imageWidth: 400,
    imageHeight: 400,
    imageClass: 'image-computer',
    title: 'HTML, CSS & JavaScript',
    description:
      'The foundation of everything on the web. I can build responsive layouts from scratch and bring them to life with vanilla JS — no framework required.',
  },
  {
    id: 'git-deploy',
    image: '/images/chillies.png',
    imageWidth: 366,
    imageHeight: 353,
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
