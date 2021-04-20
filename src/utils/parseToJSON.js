const parseToJSON = (strJSON) => {
  try {
    return JSON.parse(strJSON)
  } catch {
    return ''
  }
}

export { parseToJSON }
