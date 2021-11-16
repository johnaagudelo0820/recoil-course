import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Canvas from './Canvas'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {RecoilRoot} from 'recoil'

import {Selectors} from './examples/Selectors'
import {Atoms} from './examples/Atoms'
import {Async} from './examples/Async'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/example/atoms">
              <Atoms />
            </Route>
            <Route path="/example/selectors">
              <Selectors />
            </Route>
            <Route path="/example/async">
              <Async />
            </Route>
            <Route>
              <Canvas />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
)
