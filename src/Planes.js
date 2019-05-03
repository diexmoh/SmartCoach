import React, {Component} from 'react';
import {Parallax, Icon, Section, Col, Row, CardPanel} from 'react-materialize';

class Planes extends Component {
    render() {
        return (
            <div>
                <Parallax imageSrc="./smartcoach4.jpg"/>
                    <div className="section white responsive-img">
                    <div className="row container">
                    <Section>
                        <Row className='center'>
                            <Col s={12} m={4}>
                                <Icon medium>fitness_center</Icon>
                                <CardPanel className="teal lighten-4 black-text">
                                    <h4>Paquete 1</h4>
                                    <ol>
                                        <li>Rutina de entrenamiento.</li>
                                        <li>Plan de nutrición.</li>
                                        <li>Asesoría 7am a 11pm.</li>
                                        <li>Atención en medios digitales (a elegir).</li>
                                    </ol>
                                </CardPanel>
                            </Col>
                            <Col s={12} m={4}>
                            <Icon medium>fitness_center</Icon>
                                <CardPanel className="teal lighten-4 black-text">
                                <h4>Paquete 2</h4>
                                    <ol>
                                        <li>Rutina de entrenamiento.</li>
                                        <li>Plan de nutrición.</li>
                                        <li>Asesoría 7am a 11pm.</li>
                                        <li>Atención en medios digitales (a elegir).</li>
                                    </ol>
                                </CardPanel>
                            </Col>
                            <Col s={12} m={4}>
                            <Icon medium>fitness_center</Icon>
                                <CardPanel className="teal lighten-4 black-text">
                                <h4>Paquete 1</h4>
                                    <ol>
                                        <li>Rutina de entrenamiento.</li>
                                        <li>Asesoría limitada.</li>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </ol>
                                </CardPanel>
                            </Col>
                        </Row>
                    </Section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Planes;