import React, { useEffect, useState } from 'react'
import { projectData } from './Data'
import { projectsNav } from './Data'
import WorksItems from './WorksItems'


const PortfolioData = () => {
    const [item , setItem] = useState({name:"all"})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(()=>{
        if(item.name === "all"){
            setProjects(projectData)
        }
        else{
            const newProject = projectData.filter((project) =>{
                return project.category === item.name;
            })

            setProjects(newProject)
        }
    },[item])

    const handleClick = (e , index) =>{
        setItem({name:e.target.textContent})
        setActive(index)
    }


  return (
    <>
   <div className="work_filers">
    {projectsNav.map((item , index)=>{
        return(
            <span onClick={(e)=>handleClick(e , index)} 
            
            className={`${active === index ? "active-work" : "" } work_item`}
            
            key={index}>{item.name}</span>
        )

    })}
   </div>

    <div className="work_container container grid">
        {projects.map((item , index)=>{
            return <WorksItems item={item} key={item.id}/>

        })}
        </div>
    </>
  )
}

export default PortfolioData
