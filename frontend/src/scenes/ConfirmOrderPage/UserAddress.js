import React from 'react'

const UserAddress = ({ address }) =>
  <div>
    <p>{address.street}</p>
    <p>{address.zip} {address.city}</p>
    <p>{address.country}</p>
  </div>

export default UserAddress