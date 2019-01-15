import React from "react"
import { Container, Row, Col, Button } from "reactstrap"

const PuppyDetails = ({ puppy, language }) => (
  <Container className="pt-5">
    <Row>
      <Col xs="12" md="5">
        <img className="w-100 shadow rounded" alt={puppy.name} src={puppy.image_url} />
      </Col>
      <Col xs="12" md="7">
        <h1>{puppy.name}</h1>
        <h4>{puppy.size}</h4>
        <p>{puppy.description[language]}</p>
        <div>
          <Button className="mr-3" color="primary">
            Add To Cart
          </Button>
          <Button color="primary" outline>
            see cart
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
)

export default PuppyDetails
