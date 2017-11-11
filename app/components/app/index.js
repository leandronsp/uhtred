import React from 'react'
import HeaderToolbar from 'containers/headerToolbar/index'
import Sidebar from 'containers/sidebar/index'
import Main from 'containers/main/index'

const App = () => {
  return (
    <div>
      <HeaderToolbar />
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
