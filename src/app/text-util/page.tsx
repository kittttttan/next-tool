import TextUtil from './text-util'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Text Utility',
}

export default function TextUtilPage() {
  return (
    <>
      <h2>Text Utility</h2>
      <TextUtil />
    </>
  )
}
