import {responseWrapper} from '../lib/lib.mjs'
export async function handler(event){  // LOGIC
  try {
    return responseWrapper({})
  } catch (e) {
    return responseWrapper(e)
  }
}
