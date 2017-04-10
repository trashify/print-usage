<h1 align="center">print-usage</h1>
<div align="center">
  <strong>Helpful CLI usage printer</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/print-usage">
    <img src="https://img.shields.io/npm/v/print-usage.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/print-usage">
  <img src="https://img.shields.io/npm/dm/print-usage.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/print-usage">
    <img src="https://img.shields.io/travis/tiaanduplessis/print-usage.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fprint-usage">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fprint-usage.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/print-usage">
    <img src="https://dependencyci.com/github/tiaanduplessis/print-usage/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/print-usage/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/print-usage.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/print-usage/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/print-usage.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/print-usage/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/print-usage.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20print-usage!%20https://github.com/tiaanduplessis/print-usage%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/print-usage.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/print-usage/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

Simple CLI utility module for printing usage info to console or stream.

## Install

```sh
$ npm install --save print-usage
# OR
$ yarn add print-usage
```

## Usage

```js
const printUsage = require('print-usage')

const dummy = [
  {flags: ['--foo', '-f'], alias: '-b', description: 'Does the things', default: '55'},
  {flags: ['--bar', '--baz'], alias: '-b', description: 'Does the other things'},
  {flags: ['--baz'], description: 'Does nothing', default: 'foo'}
]

const test = printUsage(dummy)
test.print()
//    --foo, -f, -b            Does the things (default: 55)
//    --bar, --baz, -b         Does the other things
//    --baz                    Does nothing (default: foo)

```

## API

```js
printUsage(arrayOfUsages, options)
```

module exports single function that returns object with `print`, `set` &  `get` property functions. See [example](example.js).


## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
