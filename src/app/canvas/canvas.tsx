'use client';

import { useEffect, useState } from 'react'
import { hex2rgba } from '@/utils/hex'

export default function Canvas() {
  const [text, setText] = useState('320x240')
  const [fontSize, setFontSize] = useState(48)
  const [width, setWidth] = useState(320)
  const [height, setHeight] = useState(240)
  const [bgColor, setBgColor] = useState('#000000')
  const [color, setColor] = useState('#ffffff')
  const [colorOpacity, setColorOpacity] = useState(0.75)
  const [fontFamily, setFontFamily] = useState('monospace')
  const [imageUrl, setImageUrl] = useState('')

  function draw() {
    const canvas = document.createElement('canvas') as HTMLCanvasElement
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, width, height)

    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, width, height)

    ctx.font = `${fontSize}px ${fontFamily}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = hex2rgba(color, colorOpacity)
    const tx = width / 2
    const ty = height / 2
    ctx.fillText(text, tx, ty)

    setImageUrl(canvas.toDataURL('image/png'))
  }

  function download() {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `${text}.png`
    link.click()
  }

  useEffect(() => {
    draw()
  })

  return (
    <>
      <div className="input" style={{
        maxWidth: 320,
        margin: 'auto'
      }}>
        <div>
          size
          <input type="number" min={1} max={1280} value={width} maxLength={4}
            onChange={e => setWidth(+e.target.value)} />
          x
          <input type="number" min={1} max={1280} value={height} maxLength={4}
            onChange={e => setHeight(+e.target.value)} />
        </div>
        <div>
          <label>
            background
            <input type="color" value={bgColor}
              onChange={e => setBgColor(e.target.value)} />
          </label>
        </div>
        <div>
          text
          <input type="text" value={text}
            onChange={e => setText(e.target.value)} /><br />
          <select value={fontFamily}
            onChange={e => setFontFamily(e.target.value)}>
            <option value="sans-serif">sans-serif</option>
            <option value="serif">serif</option>
            <option value="system-ui">system-ui</option>
            <option value="monospace">monospace</option>
            <option value="cursive">cursive</option>
            <option value="fantasy">fantasy</option>
          </select>
          <input type="number" id="fs" min={1} max={100} value={fontSize} maxLength={3}
            onChange={e => setFontSize(+e.target.value)} />
          <input type="color" value={color}
            onChange={e => setColor(e.target.value)} />
          <input type="number" min={0} max={1} step={0.05} value={colorOpacity} maxLength={5}
            onChange={e => setColorOpacity(+e.target.value)} />
        </div>
      </div>
      <div className='tac'>
        <img src={imageUrl} alt="image" />
      </div>
      <div className='tac'>
        <button onClick={download}>download</button>
      </div>
    </>
  )
}
