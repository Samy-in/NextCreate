// here you can see we have used dynamic routing by writting the name of the folder inside '[]'
// which can now handle multiiple files efficiently
import React from 'react'

// const User = async (props) => {
//     console.log(props); this will
// here when this is will run the properties behind the route which will let us know a term called 'Params'
// in short parameters that has users name which can be changed by changing the name in routes
//  Ex: http://localhost:3000/Userlist/users this represents on the screen is 'Tell me about 'users''


const User = async ({ params } : { params: { users: string }}) => {
    const users = params.users;
  return (
    <div>
        <h1>Info about {users}</h1>
        <p>Hello i'm {users}</p>
    </div>
  )
//   in this you can change name as you type it in the route on search bar dynamicly
}

export default User;
