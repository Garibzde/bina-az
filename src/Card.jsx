import { useState } from 'react'
import './card.css'
import { FaRegHeart, FaHeart } from 'react-icons/fa'


function Card({elan}) {
  const { image, price, title, rooms, area, location, time} = elan
  const [heart, setHeart] = useState(true)
  const changeHeart = () => {
    setHeart(!heart)
  }
  
  return (
    <div className='card'> 
        <div className='heart'>
          <a  onClick={changeHeart}>{heart ? <FaRegHeart color='white' size={20}/> :
                                                                <FaHeart color='red' size={20} />}
          </a>        
        </div>
      <img src={image} alt={title} />
      <h2>{price}₼</h2>
      <h3>{title}</h3>    
      <p >{rooms} otaq - {area} m<sup>2</sup> </p>
      <p className='room'>{location} , {time}</p>

    </div>
  )
}

export default Card