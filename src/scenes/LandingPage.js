import React from 'react'
import {
  Container,
  Jumbotron
} from 'reactstrap'
import styled from 'styled-components'

const StyledJumbotron = styled(Jumbotron)`
  && {
    background: #f9f9f9;
    padding: 48px 16px;
  }
  @media (min-width: 768px) {
    && {
      background: #f9f9f9;
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
      </StyledContainer>
    </StyledJumbotron>
  </div>

export default LandingPage
