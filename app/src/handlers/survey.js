const {responseWrapper} = require('../lib/lib.js')
exports.handler = async (event) => {
  // LOGIC
  try {
    return responseWrapper({})
  } catch (e) {
    return responseWrapper(e)
  }
}
