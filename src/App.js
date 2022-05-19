import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Reset from './pages/Reset'
import Register from './pages/Register'
import Frame from './components/Frame'
import { BrowserRouter } from 'react-router-dom'
import './App.less'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route key='/login' path='/login' component={Login}/>
          <Route key='/reset' path='/reset' component={Reset}/>
          <Route key='/register' path='/register' component={Register}/>
          <Route key='/teacher' path='/teacher' component={Frame}/>
          <Redirect to="/login" />
          {/* <Frame /> */}
        </BrowserRouter>
      </div>
    )
  }
}