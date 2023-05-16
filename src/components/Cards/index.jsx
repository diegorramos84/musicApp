/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import React from 'react'
import { songs } from '../../data.json'
import { Card } from '..'

function Cards() {
  return(
    <>
    {songs.map((song, index) => {
      return(
        <Card key={index} song={song}/>
      )
    })}
    </>
  )

}

export default Cards
