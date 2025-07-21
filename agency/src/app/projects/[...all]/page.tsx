import React from 'react'
// this topic is catching all route segments into one file.
//  below process is called as accessing params that is 'all' named file
const Project = async ({ params } : { params: { all: string[] }}) => {
    // params.all is already the array we need, no need to destructure
    const all = params.all;
  return (
    <div>
        <h1>Projects {all.join('/')}</h1> <br /> <br/>
        All Route Segments:{" "}
        <ul>
            {all.map((segment) => (
                <li key={segment}>{segment}</li>
            ))}
        </ul>
    </div>
  )
//   in this you can change name as you type it becomes an route on search bar dynamicly
}

export default Project;