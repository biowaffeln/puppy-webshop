import React from 'react'
import {
  Container,
  Jumbotron,
  Button
} from 'reactstrap'
import PuppyListContainer from './PuppyListContainer'
import './styles.scss'

const LandingPage = () =>
  <div>
    <Jumbotron className="text-center" id="landingpage-jumbotron">
      <Container>
        <h1 className="jumbotron-heading mb-3">Buy cute puppies</h1>
        <p className="lead text-muted">
          This is a very good place to do this,
          and surely buying cute puppies on the internet isn't illegal.
        </p>
        <Button outline color="primary">Let's do this!</Button>
      </Container>
    </Jumbotron>
    <PuppyListContainer />
  </div>

export default LandingPage
