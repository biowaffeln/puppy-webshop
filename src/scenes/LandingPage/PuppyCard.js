import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const PuppyCard = ({ name, imageUrl }) => {
  return (
    <div>
      <Card className="shadow-sm">
        <CardImg top width="100%" src={imageUrl} alt="Puppy Image" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>50.00 $</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary">Buy!</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default PuppyCard