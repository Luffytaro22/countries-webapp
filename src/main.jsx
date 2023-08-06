import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './redux/store.js'
import './index.css'
import { getRegions } from './redux/home/regionSlice';

const regionsNames = [
  'Asia',
  'Oceania',
  'Europe',
  'Africa',
  'Northern America',
  'South America',
]

regionsNames.forEach((name) => {
  store.dispatch(getRegions(name));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
