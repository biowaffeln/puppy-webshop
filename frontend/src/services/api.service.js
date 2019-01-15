const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL
  ? process.env.REACT_APP_BACKEND_URL
  : 'http://localhost:8000'

const fakedb = [{
    id: 1,
    name: "doggo",
    size: "30cm",
    price: "500.00",
    imageUrl: "http://www.placepuppy.net/400/250",
    description: {
        "DE": "dies ist ein Hund",
        "EN": "this is a dog"
    },


}]

async function getAllPuppies() {
//  const res = await fetch(REACT_APP_BACKEND_URL + '/shop/puppies/all')
//  return res.json()
    return fakedb
}
async function getPuppyById(id) {
  // const res = await fetch(REACT_APP_BACKEND_URL + `/shop/puppies/${id}`)
  // return res.json()
    return fakedb.find(dog => dog.id === Number(id))
}

export default {
  getAllPuppies,
  getPuppyById
}
