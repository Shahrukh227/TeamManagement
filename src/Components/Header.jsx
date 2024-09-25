import React, { useContext } from 'react'
import { EmployeeStoreProvider } from '../Store/EmployeeStore'
import css from "../Style/Header.module.css"

function Header() {

  const  {team , employees} = useContext(EmployeeStoreProvider)

  const length = employees.filter((employee)=>employee.teamName === team).length
  return (
    <section className={css.header}>
      <h1>Team Management</h1>
      <p>{team} consist of {length} members</p>
    </section>
  )
}

export default Header
