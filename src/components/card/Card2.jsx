import React from 'react'
import "./card2.css"

function card2(props) {
  return (
    <div className='card2'>
        <img className='img2' src={props.img} alt="" />
        <div>
        <p className='card-title'>
            {props.name}
        </p>
        <b>
          {props.cost}
        </b>
        <button className='nav-btn'>
          {props.button}
        </button>
        </div>
    </div>
  )
}

export default card2