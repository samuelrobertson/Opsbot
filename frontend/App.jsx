import { useState } from 'react'

export default function App() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const send = async () => {
    const res = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    })
    const data = await res.json()
    setResponse(data.response)
  }

  return (
    <div>
      <h1>OpsBot</h1>
      <textarea value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={send}>Send</button>
      <pre>{response}</pre>
    </div>
  )
}
