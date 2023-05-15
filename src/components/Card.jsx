/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


function Card(data, index) {
  const [liked, setLiked] = useState(false)

  const handleLike = (e) => {
    if (liked === false) {
      setLiked(prevState => prevState = true)
      e.target.innerText = "Unlike"
    } else {
      setLiked(prevState => prevState = false)
      e.target.innerText = "Like"
    }
  }

  return(
    <div key={index} className={`card ${liked === true ? "like-border" : undefined }`}>
      <div id="card-cover">
        <img src={ data.song.cover_art_link }  alt="cover art" />
      </div>
      <div id="card-content">
        <h3>{ data.song.name }</h3>
        <p>Released: {data.song.released_date}</p>
      </div>
      <div id="card-likeButton">
        <button onClick={ handleLike }>Like</button>
      </div>
    </div>
  )
}


export default Card
