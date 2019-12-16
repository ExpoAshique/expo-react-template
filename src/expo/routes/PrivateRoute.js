import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  location,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route
      {...rest}
      component={props => (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  ) : (
    <Redirect to="/" />
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.token,
})

export default connect(mapStateToProps)(PrivateRoute)
