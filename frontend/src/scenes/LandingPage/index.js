import React from 'react'
import {
    Row,
    Col,
    Container,
    Jumbotron,
    Button
} from 'reactstrap'
import PuppyListContainer from './PuppyListContainer'
import './styles.scss'

const LandingPage = () =>
    <div>
        <Jumbotron className="text-center" id="landingpage-jumbotron">
        <Row>
            <Col>
            </Col>
        </Row>
    </Jumbotron>

        <Container>

            <h1 className="jumbotron-heading mb-3">ADOPT <br/> DON'T <br/> SHOP</h1>
            <p className="lead text-muted" id="dogs-quote">
                My name is Boris <br/>
                i love to chase toys <br/>
                I'm looking for a new home
            </p>
            <Col>
                <Button outline color="primary">CHANGE A LIFE</Button>
            </Col>
        </Container>
        <PuppyListContainer />
    </div>

export default LandingPage
