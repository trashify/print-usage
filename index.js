'use strict'

const rightPad = require('pad-right')

module.exports = function (usages, options = {}) {
  if (!Array.isArray(usages)) {
    throw new Error('Invalid Argument. Must provide array')
  }

  let _usages = usages

  function print (usages = [], options) {
    return usages.reduce((acc, cur) => {
      return `${acc}\n${buildLine(cur, {colors: {flags: 'red'}})}`
    }, '') + '\n'
  }

  function buildLine (usage = {}, options) {
    const strings = ['    ']

    const { indent = 25 } = options

    if (usage.flags && Array.isArray(usage.flags)) {
      let flags = usage.flags.reduce((acc, curr) => {
        return `${acc}, ${curr}`
      })

      if (usage.alias) {
        flags += `, ${usage.alias}`
      }

      strings.push(rightPad(flags, indent, ' '))
    }

    if (usage.description) {
      strings.push(usage.description)
    }

    if (usage.default) {
      strings.push(` (default: ${usage.default})`)
    }

    return strings.join('')
  }

  return {
    print: (stream) => (stream || process.stdout).write(print(_usages, options)),
    set: (usages) => {
      _usages = usages
    },
    get: () => _usages
  }
}
