const BACKEND_URL = process.env.BACKEND_URL
  ? process.env.BACKEND_URL
  : 'http://localhost:8000'

export default {
  async getAllPuppies() {
    const res = await fetch(BACKEND_URL + '/shop/puppies/all')
    return res.json()
  },
  async getPuppyById(id) {
    const res = await fetch(BACKEND_URL + `/shop/puppies/${id}`)
    return res.json()
  }
}
