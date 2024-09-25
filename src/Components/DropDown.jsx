import React, { useContext, useState } from 'react'
import css from "../Style/DropDown.module.css"
import { EmployeeStoreProvider } from '../Store/EmployeeStore'

function DropDown() {

  const {team , setTeam} = useContext(EmployeeStoreProvider)
  return (
    <section className={css.dropDown}>
<select className={css.drop} onChange={(e)=>setTeam(e.target.value)} value={team}>
<option value="TeamA">TeamA</option>
<option value="TeamB">TeamB</option>
<option value="TeamC">TeamC</option>
<option value="TeamD">TeamD</option>
    </select>
    </section>
    
  )
}

export default DropDown
