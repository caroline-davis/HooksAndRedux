
// mock timeout for api call
const wait = () => new Promise(r => setTimeout(() => r(), 2000))


  export const getAddress = async() => {
      await wait()
      const address = {city: "Melbourne", country: "Australia"}
      return (
          address
      )
  }