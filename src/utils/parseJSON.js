const parseToJSON = (strJSON) => {
  try {
    return JSON.parse(strJSON)
  } catch {
    return ''
  }
}

const parseFromJSON = (strObject) => {
  try {
    return JSON.stringify(strObject)
  } catch {
    return ''
  }
}

export { parseToJSON, parseFromJSON }
