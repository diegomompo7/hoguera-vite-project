
import './App.css'
import { Languages } from './components/Languages'
import logo from './assets/img/logo.png'
import { Scenes } from './components/Scenes'

function App() {

  return (
    <>
    <Languages></Languages>
    <img src={logo} alt="" />
    <Scenes></Scenes>
    </>
  )
}

export default App
