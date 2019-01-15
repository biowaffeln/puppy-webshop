import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import './styles.css'

const PuppyDetails = ({puppy, language}) =>
        <Container className="pt-5">
              <Row>
                <Col xs="12" >
                <img className="w-100" src={puppy.imageUrl}/>
                <div id="square">
                  <Row xs="12">
                    <Col md="3"><h1 class="text-center">{puppy.name}</h1></Col>
                    <Col md="3"><h4 class="text-center">{puppy.size}</h4></Col>
                    <Col md="3"><p class="text-center">{puppy.description[language]}</p></Col>
                    <Col md="3"><Button class="text-center" color="primary">Buy</Button></Col>
                  </Row>
                </div>

                </Col>

              </Row>

          </Container>

export default PuppyDetails
