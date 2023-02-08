import {responseWrapper} from '../lib/lib.mjs'
export async function handler(event){  // LOGIC
  try {
    //go fetch wordpress api endpoint data
    //go fetch other website energy program data (e.g., rss feeds, apis, etc.)
    return responseWrapper({})
  } catch (e) {
    return responseWrapper(e)
  }
}