import './App.css'
import { Cards, Headline, Banner, Form } from './components'

function App() {
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

export default App
