import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from './Name.jsx'
import Counter from './Counter.jsx'
import PropsNew from './PropsNew.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Name/>
    <Counter/>
    <PropsNew/>
  </StrictMode>,
)
