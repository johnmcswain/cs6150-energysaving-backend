const HEADERS = {
  'Content-Type': 'application/json'
}
const internalError = {
  statusCode: 500,
  body: 'There was an internal problem with the request',
  headers: HEADERS
}

function responseWrapper (data = null) {
  if (data) {
    if (data instanceof Error) {
      internalError.body = data.message
      return internalError
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: HEADERS
    }
  } else if (data == null) {
    return {
      statusCode: 200,
      body: 'No results found',
      headers: HEADERS
    }
  } else {
    return internalError
  }
}

module.exports = {
  responseWrapper
}
