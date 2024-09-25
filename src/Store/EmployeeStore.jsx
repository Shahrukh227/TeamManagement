import { useEffect, useState } from "react";
import { createContext } from "react";

export const EmployeeStoreProvider = createContext({
  employees : [],
  team : "",
  setTeam : ()=>{},
  setEmployees : ()=>{},
  groupedTeam : [],
  setGroupedTeam : ()=>{}
});


const EmployeeStoreContainer = ({children})=>{

  const [team , setTeam] = useState(JSON.parse(localStorage.getItem("teamSetting")) ||"TeamA")

 const [employees , setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])

  useEffect(()=>{
localStorage.setItem("teamSetting" , JSON.stringify(team))
  },[team])

  useEffect(()=>{
localStorage.setItem("employeeList" , JSON.stringify(employees))
  },[employees])

  const [groupedTeam , setGroupedTeam] = useState(groupedTeamFunc())

  function groupedTeamFunc (){
    const teamUpdated = [];

    const A = employees.filter((item)=>item.teamName === "TeamA");
   const teamA = {team : "TeamA" , members : A , collapse : team === "TeamA" ? false : true }

   teamUpdated.push(teamA);


   const B = employees.filter((item)=>item.teamName === "TeamB");
   const teamB = {team : "TeamB" , members : B , collapse : team === "TeamB" ? false : true }

   teamUpdated.push(teamB);

   const C = employees.filter((item)=>item.teamName === "TeamC");
   const teamC = {team : "TeamC" , members : C , collapse : team === "TeamC" ? false : true }

   teamUpdated.push(teamC);

   const D = employees.filter((item)=>item.teamName === "TeamD");
   const teamD = {team : "TeamD" , members : D , collapse : team === "TeamD" ? false : true }

   teamUpdated.push(teamD);

   return teamUpdated

  }


  return <EmployeeStoreProvider.Provider value={{employees,
    team,
    setEmployees,
    setTeam,
    groupedTeam,
    setGroupedTeam}} >{children}</EmployeeStoreProvider.Provider>
}

export default EmployeeStoreContainer