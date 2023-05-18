import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const Song = () => {
  const [song, setSong] = useState({})
  const [url, setUrl] = useState('')
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {

    const getSongs = async () => {
      try {
        const response = await axios.get('https://musicbrainz.org/ws/2/release?artist=3b6abaef-febf-4cfe-943f-6a20cf0afdad&limit=100&fmt=json')
        const data = await response.data["releases"]
        data.map((song) => {
          if (song.title === name) {
            console.log(song)
            setSong(song)
            setUrl(`https://listenbrainz.org/player/release/${song["id"]}`)
          }
        })
      } catch (error) {
        console.log(error.message)
      }
    }
    getSongs()
  }, [])

  return (
    <div>
      <button onClick={() => navigate('/')}>Back to Home</button>
      <h1>{song.title}</h1>
      <p>{song["primary-type-id"]}</p>
      <a href={url}>
      <button>Listen</button>
      </a>

    </div>

  )
}

export default Song


// https://listenbrainz.org/player/?recording_mbids=


// https://musicbrainz.org/ws/2/recording?artist=3b6abaef-febf-4cfe-943f-6a20cf0afdad&fmt=json


// https://musicbrainz.org/ws/2/release-group?artist=3b6abaef-febf-4cfe-943f-6a20cf0afdad&fmt=json


// const url = `https://listenbrainz.org/player/?recording_mbids=${song["primary-type-id"]}`
