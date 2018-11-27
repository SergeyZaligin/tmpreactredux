import React, { Component } from 'react'
import Header from '../../components/Layout/Header'


class Layout extends Component {
    render() {
        return (
          <div className="wrapper">
            <Header className="header" />
            
            <main className="main" role="main">{this.props.children}</main>
            <footer className="footer">Footer</footer>
          </div>
        )
    }
}

export default Layout