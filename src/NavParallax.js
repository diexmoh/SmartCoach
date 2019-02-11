import React, {Component} from 'react';
import {Parallax} from 'react-materialize';

class NavParallax extends Component {
    render() {
        return (
            <div>
            <Parallax imageSrc="./smartcoach2.jpg"/>
            <div className="section white responsive-img">
                <div className="row container">
                <h2 className="header center-align">Entrena a tu manera.</h2>
                <p className="grey-text text-darken-3 lighten-3 center-align">
                    Ofrecemos planes de entreanmiento que se adaptan a tus necesidades.
                </p>
                </div>
            </div>
            <Parallax className="responsive-img" imageSrc="./smartcoach3.jpg"/>
            </div>
        );
    }
}

export default NavParallax;