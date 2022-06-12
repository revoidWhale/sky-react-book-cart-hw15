import './App.css'
import Likes from './component/Like'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
