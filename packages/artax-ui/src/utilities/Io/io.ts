export const fetcher = url => fetch(url).then(res => res.json())
export const fetcherWithHeaders = (url, headers) =>
  fetch(url, { headers }).then(res => res.json())
