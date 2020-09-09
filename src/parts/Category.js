import React from 'react'
import Button from 'elements /Button'

import Fade from 'react-reveal/Fade'

export default function Category({data}) {
    return data.map((category, nama) =>{
        
        return <Fade><section className="container" key={`category-${nama}`}>
            
            <h4 className="mb-3 font-weight-medium text-gray-900">
                
                {category.name}
               
            </h4>
            <div className="container-grid">
                {
                    category.items.length === 0 ?  <div className="row">
                        <div className="col-auto align-items-center">
                            There is no property at this Category
                        </div>
                    </div>  : category.items.map((item,index2) =>{
                        return <div className="item column-3 row-1" key={`category-${nama}-item-${index2}`}>
                            <Fade bottom delay={200*index2}>
                            <div className="card">
                                {item.isPopular && (<div className="tag">
                                    Popular <span className="font-weight-light">Choice</span>
                                    </div>)}   
                            <figure className="img-wrapper" style={{height: 180}}>
                            <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                            </figure>  
                            <div className="meta-wrapper">
                                <Button type="link" href={`/properties/${item._id}`} className="stretced-link d-block text-gray-800">
                    <h5 className="h4 text-gray-900"> {item.name}</h5>
                                </Button>
                    <span className="text-gray-500">{item.city}, {item.country}</span>
                            </div>     
                            </div>
                            </Fade>
                        </div>
                    })
                }
            </div>
                
        </section>
        </Fade>
        
    })
        
    
}
