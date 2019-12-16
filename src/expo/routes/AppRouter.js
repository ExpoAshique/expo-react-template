import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'

// Routes
import AuthRoute from './AuthRoute'
import PrivateRoute from './PrivateRoute'

// Index Routes

import { Auth, Public, Private } from './Router'
import { NotFound, Layout } from '../components'
import PublicRoute from './PublicRoute'

// Components

export const history = createBrowserHistory()

class RootRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            {Public.map((R, k) => {
              return (
                <PublicRoute
                  key={k}
                  path={R.path}
                  component={R.component}
                  exact={R.exact}
                />
              )
            })}

            {Auth.map((R, k) => {
              return (
                <AuthRoute
                  key={k}
                  path={R.path}
                  component={R.component}
                  exact={R.exact}
                />
              )
            })}

            {Private.map((R, k) => {
              return (
                <PrivateRoute
                  key={k}
                  path={R.path}
                  component={R.component}
                  exact={R.exact}
                />
              )
            })}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token,
})

export default connect(mapStateToProps)(RootRouter)
