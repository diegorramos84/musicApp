import { useEffect, useState } from 'react'
import './style.css'
import { Cards, Headline, Banner, Form } from '../../components'


const colors = {
  dark: '#0f0e17',
  peach: '#004643',
  test: '#55423d',
  other: '#16161a',
  other2: '#232946'
}

function Home() {
  const [color, setColor] = useState(colors.dark)

  useEffect(() => {
    document.body.style.background = color

    const randomColor = () => {
      const keys = Object.keys(colors)
      return (keys[Math.floor(Math.random() * keys.length)])
    }

    const timer = setInterval(() => {
      let random = randomColor()
      let newColor = colors[random]
      setColor(newColor)
    }, 30000)

    return () => clearInterval(timer)

  }, [color])

  return (
    <div className='container'>
      {/* navbar */}
      <Banner />
      <Headline />
      <div id='cards'>
        <Cards />
      </div>
      <Form />
    </div>
  )
}
export default Home
