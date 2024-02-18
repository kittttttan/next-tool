import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
            <h1 className="title">
                <Link href="/">
                    Tools
                </Link>
            </h1>
        </header>
    )
}
