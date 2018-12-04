import React from 'react'

const PuppyDetails = ({ puppy, language }) =>
  <div>
    <h2>{puppy.name}</h2>
    <p>{puppy.description[language]}</p>
    <img src={puppy.imageUrl} />
  </div>

export default PuppyDetails
