import React from 'react'
import '../sectionsAPP/SectionsAPP.css';
function SectionsAPP(props) {
  return (
    <section className='attendance'>
       <div className="attend-text" key={props.p1}>
        <h1>{props.p2}</h1>
        <p>{props.p3}</p>
        </div> 
      <div className="attend-img">
        <img src={props.p4} alt="" />
      </div>
    </section>
  )
}

export default SectionsAPP;