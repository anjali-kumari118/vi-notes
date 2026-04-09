import { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState('')

  return (
    <div className="editor-container">
      <textarea
        className="text-editor"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing..."
        autoFocus
      />
    </div>
  )
}

export default App
