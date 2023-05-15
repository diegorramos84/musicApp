import './App.css'
import Cards from './components/Cards'
import Headline from './components/Headline'
import Banner from './components/Banner'

function App() {
  return (
    <div className='container'>
      {/* navbar */}
      <Banner />
      <Headline />
      <div id='cards'>
        <Cards />
      </div>
    </div>
  )
}

export default App
