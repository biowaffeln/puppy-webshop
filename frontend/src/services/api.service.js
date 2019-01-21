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
async function getMyOrders(auth) {
  auth = auth.token
  const res = await fetch(REACT_APP_BACKEND_URL + `/shop/orders/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "JWT " +  auth
      }
    })
  return res.json()
}

async function createOrder(auth, puppies) {
  auth = auth.token
  puppies = puppies.map(element =>
    element = {'id' : element.puppy.id, 'amount': element.amount}
  )
  const res = await fetch(REACT_APP_BACKEND_URL + `/shop/orders/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "JWT " +  auth
      },
      body: JSON.stringify({ puppies })
    })
  return res.json()
}

async function getMyAddress(auth) {
  auth = auth.token
  const res = await fetch(REACT_APP_BACKEND_URL + `/shop/address/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "JWT " +  auth
      }
    })
  return res.json()
}

export default {
  getAllPuppies,
  getPuppyById,
  getMyOrders,
  createOrder,
  getMyAddress
}
