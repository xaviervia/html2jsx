# html2jsx

[https://xaviervia.github.io/html2jsx](https://xaviervia.github.io/html2jsx)

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

## License

[The Unlicense](LICENSE)
