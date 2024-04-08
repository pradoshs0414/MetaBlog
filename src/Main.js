import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default Main