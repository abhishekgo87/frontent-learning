import React from 'react'
import vs from '../assets/vs.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
       <p id='user-name'> {props.name} </p>
       <img id='user-img' src={vs} alt="love" />
       <p id='user-desc'> {props.desc} </p>
    </div>
  )
}

export default UserCard
