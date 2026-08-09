import Image from 'next/image'

function Skill({ image, imageWidth, imageHeight, imageClass, title, description }) {
  return (
    <div className="skill-row">
      <Image
        className={imageClass}
        src={image}
        alt=""
        width={imageWidth}
        height={imageHeight}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Skill
