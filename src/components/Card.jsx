import React, { useState } from 'react'


function Card(data, index) {
  const [liked, setLiked] = useState(false)

  const handleLike = (e) => {
    console.log('I like it!')
    if (liked === false) {
      setLiked(true)
      e.target.innerText = "Dislike"
    } else {
      setLiked(true)
      e.target.innerText = "Like"
    }
  }

  return(
    <div key={index} className='card'>
      <div id="card-cover">
        <img src={ data.song.cover_art_link }  alt="cover art" />
      </div>
      <div id="card-content">
        <h3>{ data.song.name }</h3>
        <p>released data: {data.song.released_date}</p>
      </div>
      <div id="card-likeButton">
        <button onClick={ handleLike }>Like</button>
      </div>
    </div>
  )
}


export default Card
