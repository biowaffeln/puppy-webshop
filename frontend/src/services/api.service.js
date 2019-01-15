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
  console.log(auth.token)
  auth = auth.token
  const res = await fetch(REACT_APP_BACKEND_URL + `/shop/orders/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " +  auth
      }
    })
  return res.json()
}

// async function createOrder() {
//   const res = await fetch(REACT_APP_BACKEND_URL + `/shop/orders/${id}`){
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password })
//     })
//
//     return res.status === 400
//       ? { errors: 'invalid credentials' }
//       : res.json()
//
//   } catch (e) {
//     return { errors: 'a server error occured' }
//   }
//   return res.json()
// }
// async function createUser() {
//   const res = await fetch(REACT_APP_BACKEND_URL + `/shop/orders/${id}`){
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password })
//     })
//
//     return res.status === 400
//       ? { errors: 'invalid credentials' }
//       : res.json()
//
//   } catch (e) {
//     return { errors: 'a server error occured' }
//   }
//   return res.json()
// }

export default {
  getAllPuppies,
  getPuppyById,
  getMyOrders
}
