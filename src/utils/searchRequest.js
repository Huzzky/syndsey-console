const searchRequest = (array, request) => {
  // console.log(array)
  // BUG
  array.forEach((index, value) => {
    console.log(request)
    if (
      JSON.stringify(index.userRequest.request[0]) ===
      JSON.stringify(request[0])
    ) {
      console.log('зашел 1')
      if (value !== 0) {
        console.log('зашел 2')

        if (array.splice(value, value === 0 ? 0 : value - 1).length === 0) {
          console.log('зашел 3')

          array.splice(value, value === 0 ? 0 : value - 1)
          array.unshift(index)
        }
      } else if (value === 0) {
        array.splice(0, 2)
        array.unshift(index)
      }
    }
  })
  console.log(...array)
  return array
}

export { searchRequest }
