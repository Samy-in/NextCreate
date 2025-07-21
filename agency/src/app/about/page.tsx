// now i will use userouter for navigating about , login and porfolio page together.

// Reason why we use 'useRouter' is we can go back and forth after clicking on a page. it allows us to 
// use the back and front arrow while visiting pages
"use client"
import React from 'react' 
import { useRouter } from 'next/navigation';

function page() {
const router = useRouter();
  const navigate = (page: string) => {
    router.push(`/${page}`)
  }
//   Now there are router.push() = which pushes the user to other specified page
// then router.refresh() = which instantly refreshes the web page
// then router.back() = which takes user a step back
// then router.forward() = which takes user a step forward
// Most imp router.prefetch() = allows user to prefetch the data beforehand.
//  router.replace() = which replaces the user to where ever they like to move.
    
  return (
    <div>
        <h1>hello, Forever young I'll be Forever young</h1>
        <button onClick ={()=> navigate("login")} >Go to the login page</button>
    </div>
  ) // on above we add an onclick event that navigates to the login page
}

export default page