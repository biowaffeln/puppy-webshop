const API_URL = 'http://localhost:8000/shop'

export default {
  async getAllPuppies() {
    const res = await fetch(API_URL + '/puppies/all')
    return res.json()
  },
  async getPuppyById(id) {
    const res = await fetch(API_URL + `/puppies/${id}`)
    return res.json()
  }
}
