'use client'

import { useState } from 'react'
import { createWorker } from 'tesseract.js'

export default function ScanPage() {
  const [image, setImage] = useState<string | null>(null)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        console.log('Image loaded:', reader.result?.slice(0, 50))
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const extractText = async () => {
    if (!image) return
    setLoading(true)
    try {
      const worker = await createWorker('eng')
      console.log('Worker created')
      const { data: { text } } = await worker.recognize(image)
      console.log('Text extracted:', text)
      setText(text)
      await worker.terminate()
    } catch (error) {
      console.error('OCR error:', error)
      setText('Error extracting text: ' + error.message)
    }
    setLoading(false)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📸 Scan Your Medical Bill</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
      {image && <img src={image} alt="Uploaded" className="max-w-md mb-4" />}
      <button onClick={extractText} disabled={!image || loading} className="bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? 'Extracting...' : 'Extract Text'}
      </button>
      {text && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Extracted Text:</h2>
          <pre className="bg-white text-black p-4 rounded border">{text}</pre>
        </div>
      )}
    </div>
  )
}