import React , {useContext} from 'react'
import css from "../Style/TeamList.module.css"
import { EmployeeStoreProvider } from '../Store/EmployeeStore';

function TeamList() {

  const {groupedTeam , setGroupedTeam ,setTeam} = useContext(EmployeeStoreProvider)

const clickedTeam =(e)=>{
const trans = groupedTeam.map((item)=> item.team === e ? {...item , collapse : !item.collapse} : item)

setGroupedTeam(trans)
setTeam(e)
}

  return (
   <section className={css.teamlist}>

    {groupedTeam.map((employee)=>{
      return (
        <div className={css.team}>
          <h1 onClick={()=>clickedTeam(employee.team)}>{employee.team}</h1>

          <div className={`${css.members} ${employee.collapse ? css.collapse : ""}`}>
            {employee.members.map((member)=>{
              return (
                <section className={css.names}>
                <p>Name : {member.fullName}</p>
                <p>Designation : {member.designation}</p>
                </section>
              )
            })}
          </div>
        </div>
      )
    })}
    
   </section>
  )
}

export default TeamList
