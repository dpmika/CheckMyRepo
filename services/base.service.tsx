
const baseService =  {

  get: (url: string) => {
    const options = {
      method:'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
    return fetch(url, options)
  },
  post: (url: string, params:object) => {
    const options = {
      method:'POST',
      headers: {
        "Accept": "application/json, applcation/xml, text/json, text/x-json, text/javascript, text/xml"
      },
      body: params
    };
    return fetch(url, options)
  }
}



export default baseService