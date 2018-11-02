const API_URL = 'http://localhost:8000/shop'

const Api = {
  load() {
    return fetch(API_URL + '/puppies/all')
      .then(res => res.json())
  },
}

export default Api
