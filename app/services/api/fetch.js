import config from 'config/api'

import queryString from 'query-string'

import 'whatwg-fetch'

function get(url, { params = {} }) {
  return fetch(`${config.creativesAPIUrl}${url}?${queryString.stringify(params)}`, {
    credentials: 'include',
  }).then(response => response.json())
}

function post(url, body) {
  return fetch(`${config.creativesAPIUrl}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(body),
  })
}

export default {
  get,
  post,
}
