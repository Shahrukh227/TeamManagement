import React, { useContext } from 'react'
import { EmployeeStoreProvider } from '../Store/EmployeeStore'
import Employee from "./Employee"
import css from "../Style/EmployeeList.module.css"

function EmployeeList() {

  const {employees} = useContext(EmployeeStoreProvider)
  return (
   <section className={css.employeeList}>
{employees.map((employe)=><Employee key={employe.id} employe={employe}/>)}
   </section>
  )
}

export default EmployeeList
