import React, {Component} from 'react';
import {Footer} from 'react-materialize';

class DivFooter extends Component {
    render() {
        return (
            <Footer copyrights=""
                moreLinks={
                    <a className="black-text text-lighten-4 right" href="#!"></a>
                }
                links={
                    <ul>
                    <li><a className="black-text text-lighten-3" href="https://www.facebook.com/Smart-coach-1960494514163678/" target="blank">Facebook</a></li>
                    <li><a className="black-text text-lighten-3" href="https://www.instagram.com/tusmart_coach/?hl=es-la" target="blank">Instagram</a></li>
                    <li><a className="black-text text-lighten-3" href="mailto:smart.coach@hotmail.com" target="blank">Escríbenos</a></li>
                    </ul>
                }
                className='black-text blue lighten-4'
                >
                    <h5 className="black-text">Smart Coach</h5>
                    <p className="black-text text-lighten-4">Sé parte de nuestra comunidad de entrenamiento.</p>
            </Footer>
        );
    }
}

export default DivFooter;