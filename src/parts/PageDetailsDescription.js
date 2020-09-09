import React from 'react'
import ReactHtmlParser from "react-html-parser"



export default function PageDetailsDescription({data}) {
    return (
      <main>
          <h4>About the place</h4>
          {ReactHtmlParser(data.description)}
            <div className="row" style={{marginTop: 30}}>
                {data.features.map((featured, index) => {
                    return(
                        <div
                        key={`feature-${index}`}
                        className="col-3"
                        style={{marginBottom: 20}}>
                            <img
                            width="38"
                            className="d-block mb-2"
                            src={featured.imageUrl}
                            alt={featured.name}/>{""}
                            <span>{featured.qty}</span>{" "}
                            <span className="text-gray-500 font-weight-light">{featured.name}</span>
                        </div>
                    )
                })}
                 
            </div>
      </main>
    )
}
