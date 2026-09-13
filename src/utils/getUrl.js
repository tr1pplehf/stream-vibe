const BASE_URL = import.meta.env.BASE_URL

export const getUrl = (path) => {
  return `${BASE_URL}${path.replace(/^\/+/, '')}`
}