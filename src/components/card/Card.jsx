import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='card'>
        <img className='img' src={props.img} alt="" />
        <p className='card-title'>
            {props.name}
        </p>
    </div>
  )
}

export default Card