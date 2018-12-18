import React from 'react'
import { connect } from 'react-redux'
import t from '../../services/translation.service'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import { addPuppy, removePuppy } from '../../actions'

const PuppyCard = ({ puppy, language, addPuppy, removePuppy, isInCart }) => {
  const { name, imageUrl, price, description } = puppy
  return (
    <div>
      <Card className="shadow-blurred">
        <CardImg top width="100%" src={imageUrl} alt="Puppy Image" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{price} €</CardSubtitle>
          <CardText>{description[language]}</CardText>
          {
            isInCart(puppy.id)
              ? <Button outline color="primary" onClick={() => removePuppy(puppy.id)}>
                {t[language].puppyButtonAdded}
              </Button>
              : <Button color="primary" onClick={() => addPuppy(puppy)}>
                {t[language].puppyButtonBuy}
              </Button>
          }
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
