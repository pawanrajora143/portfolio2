import React, { useEffect, useState } from 'react'
import { projectData } from './Data'
import { projectsNav } from './Data'
// import WorksItems from './WorksItems'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'


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
   <div className="work_filers" key={item.id}>
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
            return     <div className="work_card" key={item.id}>

            <img src={item.image} alt="" className='work_img' />
            <h3 className="work_title">{item.title}</h3>
            
          <div className="cover-icon">
              <button><a href={item.live} target='_blank' className='work_button'><FaExternalLinkAlt />Live Link </a></button>
              <button><a href={item.gitcode} target='_blank' className='work_button'><FaGithub /> Source code </a></button>
              </div>
          </div>

        })}
        </div>
    </>
  )
}

export default PortfolioData
