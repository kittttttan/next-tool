import type { Metadata } from 'next';
import Animation from './animation'
 
export const metadata: Metadata = {
  title: 'Animation',
}

export default function AnimationPage() {
  return (
    <>
      <h2>Animation</h2>
      <Animation />
    </>
  )
}
