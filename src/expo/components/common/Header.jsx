import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { HeaderRun } from '../../container'
import AuthHeader from './AuthHeader'
import { toggleSetting } from '../../redux'

class Header extends Component {
  componentDidMount() {
    HeaderRun()
  }

  toggleUserblock = e => {
    e.preventDefault()
    this.props.toggleSetting('showUserBlock')
  }

  toggleOffsidebar = e => {
    e.preventDefault()
    this.props.toggleSetting('offsidebarOpen')
  }

  toggleCollapsed = e => {
    e.preventDefault()
    this.props.toggleSetting('isCollapsed')
    this.resize()
  }

  toggleAside = e => {
    e.preventDefault()
    this.props.toggleSetting('asideToggled')
  }

  resize() {
    // all IE friendly dispatchEvent
    var evt = document.createEvent('UIEvents')
    evt.initUIEvent('resize', true, false, window, 0)
    window.dispatchEvent(evt)
    // modern dispatchEvent way
    // window.dispatchEvent(new Event('resize'));
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      <header className="topnavbar-wrapper">
        {/* START Top Navbar */}
        <nav className="navbar topnavbar">
          {/* START navbar header */}
          <div className="navbar-header d-flex align-items-center justify-content-between">
            <Link className="navbar-brand" to="/app">
              <div className="brand-logo text-left ">
                <img className="img-fluid" src="/img/logo.png" alt="xERP" />
                {/* <span className="text-white">Sample Project</span> */}
              </div>
            </Link>
            {/* Button used to collapse the left sidebar. Only visible on tablet and desktops */}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              className="nav-link d-none d-md-block d-lg-block d-xl-block text-white"
              onClick={this.toggleCollapsed}
            >
              <em className="fas fa-bars" />
            </a>
            {/* Button to show/hide the sidebar on mobile. Visible on mobile only. */}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
           
          </div>

          {isAuthenticated && <AuthHeader />}
        </nav>
        {/* END Top Navbar */}
      </header>
    )
  }
}

Header.propTypes = {
  actions: PropTypes.object,
  settings: PropTypes.object,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token,
})

const mapDispatchToProps = {
  toggleSetting,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
