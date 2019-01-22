import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { connect } from "react-redux"
import { addPuppy, removePuppy } from "../../actions"
import t from '../../services/translation.service'
import { Link } from 'react-router-dom'

const PuppyDetails = ({ isInCart, puppy, language, addPuppy, removePuppy }) => (
  <Container className="pt-5">
    <Row>
      <Col xs="12" md="5">
        <img className="w-100 shadow rounded mb-4" alt={puppy.name} src={puppy.image_url} />
      </Col>
      <Col xs="12" md="7" className="d-flex flex-column pl-4 mb-4">
        <h4>{puppy.price} €</h4>
        <h1 className="mb-2">{puppy.name}</h1>
        <div className="d-flex text-muted">
          <p className="mr-2">{puppy.weight}g <span>&#8226;</span></p>
          <p>{puppy.age} months</p>
        </div>
        <p>{puppy.description[language]}</p>
        <div style={{ marginTop: 'auto' }}>
          {
            isInCart(puppy.id)
              ? <Button outline color="primary" onClick={() => removePuppy(puppy.id)}>
                {t[language].puppyButtonAdded}
              </Button>
              : <Button color="primary" onClick={() => addPuppy(puppy)}>
                {t[language].puppyButtonBuy}
              </Button>
          }
          <Button tag={Link} to="/cart" color="primary" outline className="ml-2">{t[language].goToCart}</Button>
        </div>
      </Col>
    </Row>
  </Container>
)

const mapStateToProps = state => ({
  language: state.language,
  isInCart: id => !!state.cart[id]
})

const mapDispatchToProps = dispatch => ({
  addPuppy: puppy => dispatch(addPuppy(puppy)),
  removePuppy: id => dispatch(removePuppy(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuppyDetails)
