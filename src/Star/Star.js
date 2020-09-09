import React from 'react'
import propTypes from 'prop-types'
import './index.scss'


export default function Star({className,value,width,height,spacing}) {

    const desimal = Number(value)%1
    const star=[]
    let leftPos = 0
    for (let index=0;index<5 && index < value - desimal;index++){
    leftPos = leftPos + width;
    star.push(
        <div className="star" key={`star-${index}`} style={{left: index*width,height: height, width: width,marginRight:spacing}}>

        </div>
    );
        
    
}
if(desimal > 0  && value <= 5)
star.push(
    <div className="star" key={`starWithdesimal`} style={{left: leftPos,height:height, width: desimal*width - spacing}}>

    </div>
);
const starPlaceHolder = []
for (let index=0;index<5;index++){
    starPlaceHolder.push(
        <div className="star placeholder" key={`starPlaceHolder-${index}`} style={{left: index*width,height:height, width: width,marginRight:spacing}}>

        </div>
    );
}
    

    
    return (
       <>
       <div className={["stars", className].join(" ")} style={{height: height}}>
       {star}
       {starPlaceHolder}
       </div>
      
       </>
    )

}
Star.propTypes={
    className:propTypes.string,
    value:propTypes.number,
    width:propTypes.number,
    height:propTypes.number,
    spacing:propTypes.number,
}
