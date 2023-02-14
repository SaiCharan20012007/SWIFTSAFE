import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'

import Login from './components/Login'
import Registration from './components/Registration'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Registration} />
    </Switch>
  </>
)

export default App
