import { create } from 'apisauce'
export const api = create({
    baseURL: 'http://45.76.166.241:8080/api/v1/',
    headers: { Accept: 'application/vnd.github.v3+json' ,'Content-Type':'application/json'},
  })

  // export const urlImg="https://webzards.com/vietq/images";