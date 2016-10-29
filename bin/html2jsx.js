#!/usr/bin/env node
const {default: html2jsx} = require('../dist/html2jsx')
const fs = require('fs')
const jsdom = require('jsdom')

jsdom.env('', (err, window) => {
  if (err) throw err

  global.window = window
  global.document = window.document

  const output = process.argv
    .slice(2)
    .map((path) => [
      path
        .split('/')[path.split('/').length - 1]
        .split('.')[0]
        .split('')
        .map((char, i) => i === 0 ? char.toUpperCase() : char)
        .join(''),
      fs.readFileSync(path).toString()
    ])
    .map(([name, source]) => html2jsx(source, {name}))
    .join('\n')

  console.log(output)
})
