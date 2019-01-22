// Niklas, Mark

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import OrderCard from './OrderCard'
import t from '../../services/translation.service'

const OrderListPage = ({ orders, language }) =>

  orders.length === 0

    ? <Container className="mt-5 d-flex flex-column align-items-center">
      <p style={{ fontSize: '4em' }}><span role="img" aria-label="Dog">🐶</span></p>
      <h3>{t[language].notOrderedYet}</h3>
      <Link color="primary" to="/">{t[language].backToShopping}</Link>
    </Container>

    : <Container>
      <Row className="mt-5">
        {orders.map(order =>
          <React.Fragment key={order.id}>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <OrderCard order={order} />
            </Col>
          </React.Fragment>
        )}
      </Row>
    </Container>

export default OrderListPage
