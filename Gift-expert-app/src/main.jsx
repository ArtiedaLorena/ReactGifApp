import React from 'react'
import ReactDOM from 'react-dom/client'
import {GifExpertApp} from "./GifExpertApp"
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //StrictMode Solo se aplica en desarrollo
  <React.StrictMode>
  
    <GifExpertApp />
  </React.StrictMode>
)
