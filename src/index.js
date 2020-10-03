import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
	gtmId: 'GTM-P3X3ZMQ'
}
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.register()
TagManager.initialize(tagManagerArgs)
