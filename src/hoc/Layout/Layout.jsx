import React, { Component } from 'react'

import './Layout.scss'

import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'


class Layout extends Component {
    render() {
        return (
          <div className="wrapper">
            <Header className="header" />
            <main className="main" role="main">{this.props.children}</main>
            <Footer
              justify="center"
              alignItems="center"
            />
          </div>
        )
    }
}

export default Layout