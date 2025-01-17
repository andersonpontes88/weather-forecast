import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './Styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
		<GlobalStyles />
	</StrictMode>,
)
