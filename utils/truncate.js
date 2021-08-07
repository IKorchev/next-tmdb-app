export const truncateString = (str, num) =>
  str && !str.length <= num ? `${str.slice(0, num)}...` : `...`

export const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1)
