import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
class Layout extends Component {
    render() {
        return (
          <div className="wrapper">
            <header className="header">Header</header>
            <main className="main" role="main">{this.props.children}</main>
            <footer className="footer">
            Footer
            <Button variant="contained" color="primary">
      Hello World
    </Button>
            </footer>
          </div>
        )
    }
}

export default Layout