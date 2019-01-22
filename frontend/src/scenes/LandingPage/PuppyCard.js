// Mark

import React from 'react'
import { connect } from 'react-redux'
import t from '../../services/translation.service'
import { Link } from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import { addPuppy, removePuppy } from '../../actions'

const PuppyCard = ({ puppy, language, addPuppy, removePuppy, isInCart }) => {
  const { name, image_url, price, description } = puppy
  return (
    <div>
      <Card className="shadow-blurred">
        <CardImg top width="100%" src={image_url} alt="Puppy Image" />
        <CardBody>
          <CardTitle className="card-bold">{name}</CardTitle>
          <CardSubtitle>{price} €</CardSubtitle>
          <CardText className="card-text mt-3 mb-4">{description[language]}</CardText>
          {
            isInCart(puppy.id)
              ? <Button outline color="primary" onClick={() => removePuppy(puppy.id)}>
                {t[language].puppyButtonAdded}
              </Button>
              : <Button color="primary" onClick={() => addPuppy(puppy)}>
                {t[language].puppyButtonBuy}
              </Button>
          }
          <Button tag={Link} to={`puppies/${puppy.id}`} outline color="primary" className="ml-2">{t[language].showDetails}</Button>
        </CardBody>
      </Card>
    </div>
  )
}

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
)(PuppyCard)
