const fakeData = [
  {id: 0, name: "Snuffles", imageUrl: "http://www.placepuppy.net/8p/400/250"},
  {id: 1, name: "Doggo", imageUrl: "http://www.placepuppy.net/18p/400/250"},
  {id: 2, name: "Puppy", imageUrl: "http://www.placepuppy.net/20p/400/250"},
]

const Api = {
  load() {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(fakeData)
      }, 200)
    })
  }
}

export default Api
