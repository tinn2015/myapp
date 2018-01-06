import fetch from 'isomorphic-fetch'

/** request origin */
const API_PREFIX = 'http://127.0.0.1/'

export function fetchJSON (type: string, url: string, params: any) {
  const fetchParams = {
    ...params,
    method: type,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      ...params.headers,
    },
  }
  /** 解决+号解析问题 */
  typeof fetchParams.body === 'string' ? fetchParams.body = fetchParams.body.replace(/\+/g, '%2B') : ''
  return fetch(`${API_PREFIX}${url}`, fetchParams).then(checkStatus).then(response => response.json())
}

function buildParams(obj: any) {
  if (!obj || typeof obj !== 'object') {
    return ''
  }
  const params = []
  for (const key in obj) {
    const value = obj[key] === undefined ? '' : obj[key]
    params.push(`${key}=${value}`)
  }
  return params.join('&')
}

/** GET 请求 */
export function fetchJSONByGet(url: string, params: any) {
  let queryParam = ''
  if (params) {
    for (const name in params) {
      queryParam = `${queryParam}${name}=${params[name]}&`
    }
  }
  return fetchJSON('GET', `${url}?${queryParam}`, {})
}

/** POST 请求 */
export function fetchJSONByPost(url: string, params: any) {
  const fetchParams = {
    body: buildParams(params),
  }
  return fetchJSON('POST', url, fetchParams)
}

/** PUT 请求 */
export function fetchJSONByPut(url: string, params: any) {
  const fetchParams = {
    body: buildParams(params),
  }
  return fetchJSON('PUT', url, fetchParams)
}

/** DELETE 请求 */
export function fetchJSONByDelete(url: string, params: any) {
  const fetchParams = {
    body: buildParams(params),
  }
  return fetchJSON('DELETE', url, fetchParams)
}

/** POST 请求 'Content-Type': 'application/json;charset=UTF-8' */
export function fetchJSONStringByPost(url: string, params: any) {
  const fetchParams = {
    body: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }
  return fetchJSON('POST', url, fetchParams)
}

/** PUT 请求 'Content-Type': 'application/json;charset=UTF-8' */
export function fetchJSONStringByPut(url: string, params: any) {
  const fetchParams = {
    body: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }
  return fetchJSON('PUT', url, fetchParams)
}

/** check response */
function checkStatus(response) {
  if ((response.status >= 200 && response.status < 300) || response.status === 500) {
    return response
  }
  const error = new Error(response.statusText)
  error.stack = response
  throw error
}