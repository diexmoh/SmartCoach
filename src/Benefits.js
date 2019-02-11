import React, {Component} from 'react';
import {Icon, Section, Col, Row, CardPanel} from 'react-materialize';

class Benefits extends Component {
    render() {
        return (
            <Section>
                <Row className='center'>
                    <Col s={12} m={4}>
                        <Icon medium>fitness_center</Icon>
                        <CardPanel className="teal lighten-4 black-text">
                            <span>Entrena donde quieras, nuestros planes se ajustan al lugar en el que entenas. 
                                Puedes seguir nuestras rutinas desde casa o desde el gimnasio de tu preferencia.
                            </span>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={4}>
                    <Icon medium>list</Icon>
                        <CardPanel className="teal lighten-4 black-text">
                            <span>
                                Trabaja por objetivos. Tu rutina se renueva cada mes para verificar tu progreso y garantizar resultados.
                            </span>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={4}>
                    <Icon medium>group</Icon>
                        <CardPanel className="teal lighten-4 black-text">
                            <span>
                                Atención garantizada, nuestro grupo de entrenadores calificados están a tu disposición
                                para asesorarte. Ellos resolverán todas tus dudas durante tu entrenamiento vía remota.
                            </span>
                        </CardPanel>
                    </Col>
                </Row>
            </Section>
        );
    }
}

export default Benefits;