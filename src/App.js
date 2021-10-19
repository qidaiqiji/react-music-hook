import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import store from './store'
import routes from './routes/index.js'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          {renderRoutes(routes)}
        </div>
      </HashRouter>
    </Provider>
  )
}

export default App
