import './App.css'
import ButtonChart from './components/ButtonChart/ButtonChart'
import Sidebar from './components/Sidebar/Sidebar'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


function App() {
 
  return (
    <div className="App">
       <Sidebar/>
       <ButtonChart/>
    </div>
  )
}

export default App
