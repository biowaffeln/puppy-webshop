import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PuppyCard from './PuppyCard'

const PuppyList = () =>
  <Container>
    <Row>
      <Col xs="12" md="4" className="mb-4">
        <PuppyCard name="Snuffles" imageUrl="http://www.placepuppy.net/1p/400/250" />
      </Col>
      <Col xs="12" md="4" className="mb-4">
        <PuppyCard name="Doggo" imageUrl="http://www.placepuppy.net/2p/400/250" />
      </Col>
      <Col xs="12" md="4" className="mb-4">
        <PuppyCard name="Puppy" imageUrl="http://www.placepuppy.net/3p/400/250" />
      </Col>
    </Row>
  </Container>

export default PuppyList