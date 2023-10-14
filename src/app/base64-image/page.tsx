import Base64Image from './base64-image'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Base64 Image',
}

export default function Base64ImagePage() {
  return (
    <>
      <h2>Base64 Image</h2>
      <Base64Image />
    </>
  )
}
