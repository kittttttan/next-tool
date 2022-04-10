import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  const links = [
    { u: '/canvas', t: 'Canvas' },
    { u: '/base64-image', t: 'Base64 Image' },
    { u: '/bin-hex', t: 'Bin ↔ Hex' },
    { u: '/text-util', t: 'Text Utility' },
  ];

  return (
    <>
      <h2>Index</h2>
      <div style={{ margin: '0 auto' }}>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.u}>
                <a>{link.t}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Link href="https://github.com/kittttttan/next-tool">
              <a rel="external noopener">kittttttan/next-tool</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
