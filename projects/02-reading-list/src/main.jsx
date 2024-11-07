import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
