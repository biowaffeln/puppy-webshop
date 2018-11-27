import React from 'react'
import { connect } from 'react-redux'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const PuppyCard = ({ name, imageUrl, price, description, language }) => {
  return (
    <div>
      <Card className="shadow-sm">
        <CardImg top width="100%" src={imageUrl} alt="Puppy Image" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{price} €</CardSubtitle>
          <CardText>{description[language]}</CardText>
          <Button color="primary">Buy!</Button>
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
