import React from 'react'
import { Header, Footer, Sidebar } from '../common'
import Offsidebar from './Offsidebar'

const PrivateLayout = props => (
  <div className="wrapper">
    <React.Fragment>
      <Header />
      <Sidebar />
      <Offsidebar />
    </React.Fragment>
    <section className="section-container">{props.children}</section>
    <Footer />
  </div>
)

export default PrivateLayout
