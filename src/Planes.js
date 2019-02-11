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
                                    <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                                </CardPanel>
                            </Col>
                            <Col s={12} m={4}>
                            <Icon medium>list</Icon>
                                <CardPanel className="teal lighten-4 black-text">
                                    <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                                </CardPanel>
                            </Col>
                            <Col s={12} m={4}>
                            <Icon medium>group</Icon>
                                <CardPanel className="teal lighten-4 black-text">
                                    <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
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