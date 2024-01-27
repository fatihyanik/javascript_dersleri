// const fetchData = async () => {
//     const url = 'https://restcountries.com/v2/all'
//     try {
//       const response = await fetch(url)
//       const countries = await response.json()
//       console.log(countries)
//     } catch (err) {
//       console.error(err)
//     }
//   }
//   console.log('===== async and await')
//   fetchData()

// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => console.error(error))


const fetchData = async () => {
    const catsAPI = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      console.log(cats)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()