import React, { useContext } from 'react'
import male from "../assets/male.jpg"
import female from "../assets/femaleProfile.jpg"
import css from "../Style/Employee.module.css"
import { EmployeeStoreProvider } from '../Store/EmployeeStore'

function Employee({employe}) {

  const {team , employees , setEmployees} = useContext(EmployeeStoreProvider)

  const fixingTeam =(id)=>{
const trans = employees.map((employee)=>employee.id === id ? employee.teamName === team ? {...employee , teamName : ""} : {...employee , teamName : team} : employee);

setEmployees(trans)
  }
  return (
    <section className={`${css.employee} ${employe.teamName === team ? css.highlight : ""}`} onClick={()=>fixingTeam(employe.id)}>
{employe.gender === "male" ? <img src={male}/> : <img src={female}/>}

<div className={css.text}>
  <p>Name : {employe.fullName}</p>
  <p>Designation : {employe.designation}</p>
</div>

    </section>
  )
}

export default Employee
