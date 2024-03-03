import React from 'react'

export default function Card(props) {
    const{img,title,text}=props
    console.log("path",img)
  return (
    <>
    <div className="card" style={{ maxWidth: "570px" }}>
          <img src={img} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {text}
            </p>
            <div className="go">
            <a href="#" className="btn btn-primary">
              Go To Explore
            </a>
            </div>
            
          </div>
        </div>
    </>
  )
}
