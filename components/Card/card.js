import React from "react";
  
const Card = (props) => {
  if(props.desc){
    return (
      <>
        <div className={`w-[1/4] h-full max-h-[340px] flex flex-col gap-y-1 p-2 ${props.style}`}>
          <div className="inline-block bg-flx-purple w-full max-w-11/12 h-[280px]">
            <img className="object-cover w-full h-full" src={props.img} alt={props.alt} />
          </div>
          <div className="py-1 text-center">
            <h4 className="text-white">{props.desc}</h4>
          </div>
        </div>
      </>
    )
  }
  else{
    return (
      <>
        <div className={`w-full h-full max-w-[300px] p-2 ${props.style}`}>
          <div className="inline-block bg-flx-purple w-full max-w-11/12 h-[300px]">
            <img className="object-cover w-full h-full" src={props.img} alt={props.alt} />
          </div>
        </div>
      </>
    )
  }
}

export default Card