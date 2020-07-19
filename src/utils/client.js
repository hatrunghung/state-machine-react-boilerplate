function client(endpoint, customConfig) {
  // const headers = {
  //   'Content-Type': 'application/json'
  // }
  const config = {
    method: 'GET',
    ...customConfig,
    // headers,
    // ...customConfig.headers
  }

  return window.fetch(endpoint, config)
    .then(response => response.json())
}

export default client