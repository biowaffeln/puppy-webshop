const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL
  ? process.env.REACT_APP_BACKEND_URL
  : 'http://localhost:8000'

async function login(username, password) {
  try {
    const res = await fetch(REACT_APP_BACKEND_URL + '/token-auth/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    })

    return res.status === 400
      ? { errors: 'invalid credentials' }
      : res.json()

  } catch (e) {
    return { errors: 'a server error occured' }
  }
}

export default {
  login
}