// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="p-card">
      <img src={imageUrl} alt={`planet ${name}`} className="p-pic" />
      <h1 className="p-head">{name}</h1>
      <p className="p-para">{description}</p>
    </div>
  )
}

export default PlanetItem
