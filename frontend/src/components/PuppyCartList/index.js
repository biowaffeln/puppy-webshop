import React from 'react'

const total = puppies =>
  puppies
    .reduce((sum, p) => sum + p.amount * Number(p.puppy.price), 0)
    .toFixed(2)

const PuppyCartList = ({ puppies }) =>

  <>{puppies.map(p =>
    <p key={p.puppy.id}>
      <span className="font-weight-bold">{p.puppy.name} </span>
      <span className="float-right">{p.amount} x {p.puppy.price} €</span>
    </p>
  )}
    <hr />
    <p className="pb-4" style={{ fontSize: '1.3em' }}>
      <span>total: </span>
      <span className="float-right">{total(puppies)} € </span>
    </p>
  </>

export default PuppyCartList
