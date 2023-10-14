import BinHex from './bin-hex'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Bin ↔ Hex',
}

export default function BinHexPage() {
  return (
    <>
      <h2>Bin ↔ Hex</h2>
      <BinHex />
    </>
  )
}
