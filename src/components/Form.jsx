/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Form() {
  const [name, setName] = useState("")

  return (
    <div id='form-name'>
      <div className="nameAlert">
        { name != "" ? <h3>Hi {name}, you are awesome!</h3> : null }
      </div>
      <div>
      <form>
        <label>Enter your name: </label>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>

      </div>
    </div>
  )
}

export default Form
