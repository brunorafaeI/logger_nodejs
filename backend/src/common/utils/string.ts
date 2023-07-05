export default {
  toBoolean: (value?: any): boolean => {
    if (typeof value === 'string') value = value.toLowerCase()

    return typeof value === 'boolean'
      || value === 'true'
      || !(value === 'false')
      || !(typeof value === 'undefined')
  },

  toFloat: (value?: any): number | undefined => {
    const conv = typeof value === 'number' ? value : parseFloat(String(value))
    return !isNaN(conv) ? conv : undefined
  },

  toString: (value?: any): string | undefined => {
    return typeof value === 'string' ? value : undefined
  }

}