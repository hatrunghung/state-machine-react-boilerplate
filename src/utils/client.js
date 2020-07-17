function client(endpoint, {body, ...customConfig} = {}) {
  const headers = {
    'Content-Type': 'application/json'
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers,
    ...customConfig.headers
  }

  return window.fetch(endpoint, config).then(async response => {
    const data = response.json()

    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export default client