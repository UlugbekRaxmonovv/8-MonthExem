import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
const  App = lazy(() => import('./App'))
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './components/context/index.js'
import LazyLoading from './components/LazyLoading/LazyLoading.jsx'
import { ContextProvider } from './components/DarkMore/Context.jsx'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ContextProvider>
<Suspense fallback={<LazyLoading/>}>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
    </Suspense>
</ContextProvider>
 
   
  </React.StrictMode>,
)
