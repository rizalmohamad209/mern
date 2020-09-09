import React from 'react'
import Star from 'Star/Star'
import Frame from '../assets/image/img-frame-testi.jpg'
import Button from '../elements /Button'
import Fade from 'react-reveal/Fade'

export default function Testimoni({ data }) {
    return (
        <section className="container">
            <Fade bottom>
            <div className="row align-items-center">
                <div className="col-auto" style={{marginRight: 70}}>
                    <div className="testimonial-hero" style={{margin: `30px 0 0 30px`}}>
                    <img src={data.imageUrl} 
                    alt="Testimonial" 
                    className="position-absolute" 
                    style={{zIndex: 1}}/>
                    <img src={Frame} alt="Frame" className="position-absolute" style={{margin: `-30px 0 0 -30px`}}/>
                    </div>
                    
                </div>
                <div className="col-6" >
                    <h4 style={{marginBottom:40}}>
                        {data.name}
                    </h4>
                     <Star value={data.rate} width={35} height={35} spacing={4}></Star>
                     <h5 className="h2 font-weight-light line-height-2 my-3">
                         {data.content}
                     </h5>
                     <span className="text-gray-500">
                         {data.familyName}, {data.familyOccupation}
                     </span>
                     <div>
                         <Button className="btn px-3" style={{marginTop: 40}} hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>
                            Read Their Story
                         </Button>
                     </div>
                
                </div>
            </div>
           
        </Fade>
        </section>
            
    )
}
