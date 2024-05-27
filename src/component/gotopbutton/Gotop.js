

import "./../../component/gotopbutton/Gotop.css"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa"


const Gotop = () => {

  const [backtoTopButton, setBacktoTopButton] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (window.scrollY > 100) {
        setBacktoTopButton(true)
      }
      else {
        setBacktoTopButton(false)
      }
    })

  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // const Gotop  = () =>{
  //     window.scrollTo(0, 0);
  // }

  return (
    <div className="top-btn" onClick={scrollUp}>
      {backtoTopButton && (<button style={{
        position: "fixed", bottom: "3rem",
        right: "3rem", height: "3.5rem", width: "3.5rem", backgroundColor: "black",
        border: "0px", color: "orange", borderRadius: "0.5rem"
      }}><FaArrowUp /></button>)}

    </div>
  )
}

export default Gotop
