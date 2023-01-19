import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react'


function Navbar() {
    const { data: session} = useSession()
 

    return (
        <nav className="header">
            <h1 className="logo"></h1>
            <ul className={`main-nav`}>
                <li>
                    <Link href="/">home</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/blogs">Blogs</Link>
                </li>
                {!session && (<li>
                    <Link href="/api/auth/signin" onClick={(e) => {
                        e.preventDefault()
                        signIn()
                    }}>Sign In</Link>
                </li>)}
                {session && (<li>
                    <Link href="/api/auth/signout" onClick={(e) => {
                        e.preventDefault()
                        signOut()
                    }}>Sign Out</Link>
                </li>)}
            </ul>
        </nav>
    )
}
export default Navbar;