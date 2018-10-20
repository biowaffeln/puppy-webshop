import React from 'react'
import {
  Container,
  Jumbotron,
  Button
} from 'reactstrap'
import styled from 'styled-components'
import PuppyList from './LandingPage/PuppyList'

const StyledJumbotron = styled(Jumbotron)`
  && {
    border-radius: 0;
    background: #fff;
    padding: 48px 16px;
    margin-bottom: 4rem;
  }
  @media (min-width: 768px) {
    && {
      padding: 96px 16px;
    }
  }

`

const StyledContainer = styled(Container)`
  && {
    width: 600px;
    max-width: 90%;
  }
`

const LandingPage = () =>
  <div>
    <StyledJumbotron className="text-center">
      <StyledContainer>
        <h1 className="jumbotron-heading mb-3">Buy cute puppies</h1>
        <p className="lead text-muted">
          This is a very good place to do this,
          and surely buying cute puppies on the internet isn't illegal.
        </p>
        <Button outline color="primary">Let's do this!</Button>
      </StyledContainer>
    </StyledJumbotron>
    <PuppyList />
  </div>

export default LandingPage
