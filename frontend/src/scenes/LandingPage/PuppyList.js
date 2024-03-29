// Mark

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PuppyCard from './PuppyCard'

const PuppyList = ({ puppies }) =>
  <Container>
    <Row>
      {puppies.map(puppy =>
        <Col xs="12" md="6" lg="4" className="mb-4" key={puppy.id}>
          <PuppyCard puppy={puppy} />
        </Col>
      )}
    </Row>
  </Container>

export default PuppyList