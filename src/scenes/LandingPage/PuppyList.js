import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PuppyCard from './PuppyCard'

const PuppyList = () =>
  <Container>
    <Row>
      <Col xs="12" md="4" className="mb-4">
        <PuppyCard name="Snuffles" imageUrl="http://www.placepuppy.net/8p/400/250" />
      </Col>
      <Col xs="12" md="4" className="mb-4">
        <PuppyCard name="Doggo" imageUrl="http://www.placepuppy.net/18p/400/250" />
      </Col>
      <Col xs="12" md="4" className="mb-4">
        <PuppyCard name="Puppy" imageUrl="http://www.placepuppy.net/20p/400/250" />
      </Col>
    </Row>
  </Container>

export default PuppyList