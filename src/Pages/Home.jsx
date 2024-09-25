import React from 'react'
import EmployeeList from '../Components/EmployeeList'
import DropDown from '../Components/DropDown'

function Home() {
  return (
    <main>
<DropDown/>
<hr className='hr'/>
      <EmployeeList/>
    </main>
  )
}

export default Home
