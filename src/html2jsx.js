import html2react from 'html2react'
import reactElementToJSXString from 'react-element-to-jsx-string'

const defaultOptions = {
  asFunction: true,
  name: 'Component'
}

export default (element, options = {}) => {
  const opts = {...defaultOptions, ...options}

  const jsx = reactElementToJSXString(html2react(element)[0])

  return opts.asFunction
    ? wrapAsFunction(opts.name, jsx)
    : jsx
}

const indent = (s) => s.split('\n').map((l) => `  ${l}`).join('\n')

const wrapAsFunction = (name, jsx) => `function ${name} () {
  return ${indent(jsx).slice(2)}
}`
