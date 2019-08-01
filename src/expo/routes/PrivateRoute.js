import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { Header } from '../components';
import Sidebar from "../components/common/Sidebar";

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  location,
  ...rest
}) => {
  return isAuthenticated ? (
    <React.Fragment>
      <Route
        {...rest}
        component={props => (
          <React.Fragment>
            <Header />
              <Sidebar/>
            <Component {...props} />
          </React.Fragment>
        )}
      />
    </React.Fragment>
  ) : (
      <Redirect to="/login" />
    )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.token,
})

export default connect(mapStateToProps)(PrivateRoute)
