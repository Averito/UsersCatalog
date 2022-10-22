import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import React from 'react'

import { store } from '@store/index'
import { App } from '@app/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>
)
