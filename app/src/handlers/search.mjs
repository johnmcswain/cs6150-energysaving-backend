import {responseWrapper} from '../lib/lib.mjs'
export async function handler(event){
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