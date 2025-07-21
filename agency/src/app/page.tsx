// now we use 'useRouter' from react that helps us to navigate new pages through tabs in dashboard.
// but we have to specify that we are on the client side becoz that's how we can access this userouter
import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <div>
      hello new userouter
    </div>
  )
}

export default Home