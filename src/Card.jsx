import './card.css'

function Card({elan}) {
  return (
    <div className='card'>
        <img src={elan.image} alt={elan.title} />
        <h2>{elan.price}₼</h2>
        <h3>{elan.title}</h3>    
        <p >{elan.rooms} otaq - {elan.area} m<sup>2</sup> </p>
        <p className='room'>{elan.location} , {elan.time}</p>

    </div>
  )
}

export default Card