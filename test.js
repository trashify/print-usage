/* eslint-env jest */
'use strict'

const printUsage = require('./')

test('print-usage', () => {
  expect(printUsage).toBeDefined()
  expect(printUsage([])).toBeTruthy()
})
