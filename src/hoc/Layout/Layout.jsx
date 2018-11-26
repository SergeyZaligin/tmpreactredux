import React, { Component } from 'react'

class Layout extends Component {
    render() {
        return (
          <div className="wrapper">
            <header className="header">Header</header>
            <main className="main" role="main">{this.props.children}</main>
            <footer className="footer">Footer</footer>
          </div>
        )
    }
}

export default Layout