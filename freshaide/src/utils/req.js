import axios from 'axios'

const urlInstance = axios.create({
  // base url to shorten path on view pages
  baseURL: 'https://www.fastmock.site/mock/64eb93be81c59c84157c008b3bf369c0/freshaide',
  timeout: 10000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    urlInstance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    urlInstance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
