# html2jsx

[Try it live](https://xaviervia.github.io/html2jsx)

> See also [html2react-json](https://github.com/xaviervia/html2react-json)

```
npm i -g html2jsx

html2jsx index.html
html2jsx Icon.svg
```

```javascript
import html2jsx from 'html2jsx'

const html = `<h1 class="hello">Hello JSX</h1>`

console.log(html2jsx(html, {name: 'Example'}))
```

> Note that the programmatic usage will only work in a browser environment. If you want to use it in Node, you will need to wrap it in [`jsdom`](https://github.com/tmpvar/jsdom). You can take a look at the [command line tool implementation](bin/html2jsx.js) for an example of how to do this

## Credits

- HTML/SVG to React conversion done with [**html2react**](https://github.com/Deschtex/html2react)
- React to JSX conversion done with [**react-element-to-jsx-string**](https://github.com/algolia/react-element-to-jsx-string)


## License

[The Unlicense](LICENSE)
