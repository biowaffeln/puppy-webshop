import React from 'react'
import { Card } from 'reactstrap'

const UserAddress = ({ address }) =>
  <Card className="shadow-blurred p-4 mb-4">
    <p className="mb-1">{address.first_name} {address.last_name}</p>
    <p className="mb-1">{address.street}</p>
    <p className="mb-1">{address.zip} {address.city}</p>
    <p className="mb-1">{address.country}</p>
  </Card>

export default UserAddress