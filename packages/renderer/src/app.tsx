import React, { useState, useCallback } from 'react'
import Editor from './editor'
import Preview from './preview'
import './app.css'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>(
    '# Hello, Jutzu!\n```javascript \nvar s = "DC-Fox Markdown Editor by Edgar Cuppari"; \n alert(s);\n``` \n![alt text][logo] \n \n[logo]:https://raw.githubusercontent.com/DeepCoreB4/electron-markdown-editor-tutorial-main/master/buildResources/icon.png "Logo Title Text 2"\n '
  )

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
