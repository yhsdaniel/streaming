import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './output.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './components/container/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster
      position='top-center'
      toastOptions={{
        duration: 1500
      }}
    />
  </BrowserRouter>
)
