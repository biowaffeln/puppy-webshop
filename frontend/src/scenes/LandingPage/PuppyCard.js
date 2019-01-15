import React from 'react'
import { connect } from 'react-redux'
import t from '../../services/translation.service'
import { Link } from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const PuppyCard = ({ id, name, imageUrl, price, description, language }) => {
  return (
    <div>
      <Card className="shadow-sm">
        <Link to={`/puppies/${id}`} >
          <CardImg top width="100%" src={imageUrl} alt="Puppy Image" />
        </Link>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{price} €</CardSubtitle>
          <CardText>{description[language]}</CardText>
            <Link to={`/puppies/${id}`}> <Button color="primary">{t[language].puppyButtonBuy}</Button> </Link>
        </CardBody>
      </Card>
    </div>
  )
}

const mapStateToProps = state => ({
  language: state.language
})

export default connect(
  mapStateToProps
)(PuppyCard)
