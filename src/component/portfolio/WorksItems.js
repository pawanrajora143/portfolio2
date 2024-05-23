
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'


import React from 'react'

const WorksItems = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>

      <img src={item.image} alt="" className='work_img' />
      <h3 className="work_title">{item.title}</h3>
      
    <div className="cover-icon">
        <button><a href="" className='work_button'><FaExternalLinkAlt />Live Link </a></button>
        <button><a href="" className='work_button'><FaGithub /> Source code </a></button>
        </div>
    </div>
  )
}

export default WorksItems
