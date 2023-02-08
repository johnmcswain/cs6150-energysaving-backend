const {responseWrapper} = require('../lib/lib.js')
exports.handler = async (event) => {
  // LOGIC
  try {
    let term = event.queryStringParameters.term
    //localhost:3000/data/search?term=usagecost
    console.log(term)
    return responseWrapper({})
  } catch (e) {
    return responseWrapper(e)
  }
}