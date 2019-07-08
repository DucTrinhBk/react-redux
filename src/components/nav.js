import React, { Component } from 'react';
class Nav extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">Employees</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/users">List of employees</a></li>
                <li><a href="/new">New</a></li>
              </ul>
            </div>
          </nav> );
    }
}
 
export default Nav;