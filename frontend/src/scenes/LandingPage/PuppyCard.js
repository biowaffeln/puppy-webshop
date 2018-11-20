import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const PuppyCard = ({ name, imageUrl, price, description }) => {
  return (
    <div>
      <Card className="shadow-sm">
        <CardImg top width="100%" src={imageUrl} alt="Puppy Image" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{price} €</CardSubtitle>
          <CardText>{description}</CardText>
          <Button color="primary">Buy!</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default PuppyCard