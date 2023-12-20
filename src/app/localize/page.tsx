import Localize from './localize'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Localize',
}

export default function LocalizePage() {
  return (
    <>
      <h2>Localize</h2>
      <Localize />
    </>
  )
}
