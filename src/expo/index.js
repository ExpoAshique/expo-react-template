import React from 'react'
import { AppRouter , history} from './routes'
import store from '../core/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import '../core/vendor'
import './styles/style.scss'
import './container/jsconfig/Vendor'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css'

console.log(history)

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <AppRouter />
  </Provider>
)

export default App
