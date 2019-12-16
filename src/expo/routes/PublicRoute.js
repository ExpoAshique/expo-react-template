import React from 'react'
import { Route, Switch } from 'react-router-dom'

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  location,
  ...rest
}) => {
  return (
    <Switch location={location}>
      <Route
        {...rest}
        component={props => (
          <React.Fragment>
            <Component {...props} />
          </React.Fragment>
        )}
      />
    </Switch>
  )
}

export default PublicRoute
