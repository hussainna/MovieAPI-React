import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './sass/main.scss'
import Home from './components/Home'
function App() {
 

  return (
    <div className="App">
     <Router>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
     </Router>
    </div>
  )
}

export default App
