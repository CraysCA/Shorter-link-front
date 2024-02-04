import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Dashboard from './Dashboard.tsx'
import './index.css'

import { RouterProvider, createHashRouter } from 'react-router-dom'

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
