'use client';

import Link from 'next/link'

export default function Home() {
  const links = [
    { u: '/canvas', t: 'Canvas' },
    { u: '/base64-image', t: 'Base64 Image' },
    { u: '/bin-hex', t: 'Bin ↔ Hex' },
    { u: '/text-util', t: 'Text Utility' },
    { u: '/animation', t: 'Animation' },
  ];

  return (
    <>
      <h2>Index</h2>
      <div style={{ margin: '0 auto' }}>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.u}>
                {link.t}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Link href="https://github.com/kittttttan/next-tool">
              kittttttan/next-tool
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
