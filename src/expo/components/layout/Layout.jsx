import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateLayout from './PrivateLayout'
import PublicLayout from './PublicLayout'

export class Layout extends Component {
  render() {
    return this.props.isAuthenticated ? (
      <PrivateLayout {...this.props} />
    ) : (
      <PublicLayout {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token,
})


export default connect(mapStateToProps)(Layout)
