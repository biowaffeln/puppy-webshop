import React from 'react'
import CartItem from './CartItem'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import t from '../../services/translation.service'
import CartCheckout from './CartCheckout'

const CartPage = ({ cart, language }) =>

  cart.length === 0

    ? <Container className="mt-5 d-flex flex-column align-items-center">
      <p style={{ fontSize: '4em' }}><span role="img" aria-label="Dog">🐶</span></p>
      <h3>{t[language].emptyCart}</h3>
      <Link color="primary" to="/">{t[language].backToShopping}</Link>
    </Container>

    : <Container>
      <Row className="mt-5">
        <Col>
          {cart.map(puppy =>
            <React.Fragment key={puppy.id}>
              <Col xs={12}>
                <CartItem puppy={puppy} language={language} />
              </Col>
              <Col xs={12}>
                <hr />
              </Col>
            </React.Fragment>
          )}
        </Col>
        <Col className="mt-4" sm={12} lg={4}>
          <CartCheckout />
        </Col>
      </Row>
    </Container>


const mapStateToProps = state => ({
  language: state.language,
})


export default connect(
  mapStateToProps,
)(CartPage)
