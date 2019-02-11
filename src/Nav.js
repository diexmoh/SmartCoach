import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './App.css';

class Nav extends Component {
    render() {
        return (
            <div className="navbar-fixed">
            <Navbar brand='SmartCoach' right className="blue">
                <NavItem href='components.html'>Suscripción</NavItem>
                <NavItem href='components.html'>Ayuda</NavItem>
            </Navbar>
            </div>
        );

    }
}

export default Nav;