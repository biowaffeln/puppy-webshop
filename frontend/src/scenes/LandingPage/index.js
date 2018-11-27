import React from 'react'
import { connect } from 'react-redux'
import t from '../../services/translation.service'
import {
  Container,
  Jumbotron,
  Button
} from 'reactstrap'
import PuppyListContainer from './PuppyListContainer'
import './styles.scss'

const LandingPage = ({ language }) =>
  <div>
    <Jumbotron className="text-center" id="landingpage-jumbotron">
      <Container>
        <h1 className="jumbotron-heading mb-3">{t[language].landingPageHeader}</h1>
        <p className="lead text-muted">
          {t[language].landingPageContent}
        </p>
        <Button outline color="primary">{t[language].landingPageButtonText}</Button>
      </Container>
    </Jumbotron>
    <PuppyListContainer />
  </div>

const mapStateToProps = state => ({
  language: state.language
})

export default connect(
  mapStateToProps
)(LandingPage)
