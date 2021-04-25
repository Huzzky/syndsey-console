const searchRequest = (array, request) => {
  // console.log(array)
  // BUG

  array.filter((value, index) => {
    console.log(array, request, value, index)
    if (JSON.stringify(value) === JSON.stringify(request)) {
      console.log(1)
      array.splice(index, 1)
      array.unshift(value)
      return array
    } else {
      console.log([...array, request])
      return [...array, request]
    }
  })
}
export { searchRequest }
