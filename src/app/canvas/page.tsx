import Canvas from './canvas'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Canvas',
}

export default function CanvasPage() {
  return (
    <>
      <h2>Canvas</h2>
      <Canvas />
    </>
  )
}
