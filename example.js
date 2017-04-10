const printUsage = require('./')

const dummy = [
  {flags: ['--foo', '-f'], alias: '-b', description: 'Does the things', default: '55'},
  {flags: ['--bar', '--baz'], alias: '-b', description: 'Does the other things'},
  {flags: ['--baz'], description: 'Does nothing', default: 'foo'}
]

const test = printUsage(dummy)
test.print()
console.log('Currently set to:', test.get())
test.set([
  {flags: ['--baz'], description: 'Does nothing', default: 'foo'}
])

// Print can be given stream as argument
test.print(process.stderr)
