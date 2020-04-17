import React from "react"

import MyNavbar from "./components/Navbar"
import './App.css';
import data from './data/data.json'

function App() {
    return (
      <div>
        <MyNavbar data={data}/>
      </div>
    )
}

export default App
