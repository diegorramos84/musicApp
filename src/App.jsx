import './App.css'
import Cards from './components/Cards'
import Headline from './components/Headline'
import Banner from './components/Banner'
import Form from './components/Form'

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
