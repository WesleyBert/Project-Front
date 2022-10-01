import React from 'react'
import ReactDOM from 'react-dom/client'

import { Login } from './pages/Login';
// import DesafioPortuga from './pages/DesafioPortuga'

// import  computer from '../src/assets/computador.png';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <DesafioPortuga photo={computer}/> */}
    <Login/>
  </React.StrictMode>
)
