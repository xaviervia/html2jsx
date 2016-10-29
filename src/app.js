import React, {Component} from 'react'
import html2jsx from './html2jsx'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      dragging: false,
      sources: [
        Source('Example', `<h1 class='hello'>Drag HTML/SVG file(s) from your computer in here</h1>`)
      ]
    }
  }

  render () {
    const {dragging, sources} = this.state

    return <main
      className={dragging ? 'dragging' : ''}
      onDragEnter={(e) => {
        e.preventDefault()
        this.setState({ dragging: true })
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        this.setState({ dragging: false })
      }}
      onDragOver={(e) => {
        e.preventDefault()
        return false
      }}
      onDrop={handleDrop(this)}>
      <pre className='text light-green'>
        {sources.map(section)}
      </pre>
    </main>
  }
}

const Source = (name, code) => ({name, code})

const section = ({name, code}, index) => <section key={index}>
  {html2jsx(code, {name})}
</section>

const handleDrop = (component) => (e) => {
  e.preventDefault()
  e.stopPropagation()

  component.setState({dragging: false})

  const {files} = e.dataTransfer

  for (let i = 0; i < files.length; i++) {
    const {name} = files[i]
    const reader = new window.FileReader()
    reader.onload = handleFileRead(
      component,
      reader,
      name.split('.')[0]
    )
    reader.readAsText(files[i])
  }
}

const handleFileRead = (component, reader, name) => () => {
  component.setState({
    sources: [
      ...component.state.sources,
      Source(name, reader.result)
    ]
  })
}
