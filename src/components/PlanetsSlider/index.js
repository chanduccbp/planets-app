// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-cont" data-testid="planets">
      <h1 className="head">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachObj => (
          <PlanetItem key={eachObj.id} planetDetails={eachObj} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
