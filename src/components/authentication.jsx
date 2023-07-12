import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link' // make sure to add this line



export function Authentication () {
    const { data: session, status } = useSession()

    if (status === "authenticated") {
      return(<div>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>)
    }

    return (
      <Link href="/api/auth/signin">
        <button>Sign in</button>
      </Link>
    )
}
