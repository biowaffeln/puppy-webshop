const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL
  ? process.env.REACT_APP_BACKEND_URL
  : 'http://localhost:8000'

async function getAllPuppies() {
  const res = await fetch(REACT_APP_BACKEND_URL + '/shop/puppies/')
  return res.json()
}
async function getPuppyById(id) {
  const res = await fetch(REACT_APP_BACKEND_URL + `/shop/puppies/${id}`)
  return res.json()
}

export default {
  getAllPuppies,
  getPuppyById
}
