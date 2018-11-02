import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const PuppyCard = ({ name, imageUrl, price }) => {
  return (
    <div>
      <Card className="shadow-sm">
        <CardImg top width="100%" src={imageUrl} alt="Puppy Image" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{price} €</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary">Buy!</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default PuppyCard