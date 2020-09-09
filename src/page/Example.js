import React, {Component} from 'react'
//import {InputDate} from 'elements /Form'
import {InputNumber} from 'elements /Form'



export default class Example extends Component {
    
    render(){
       
        return(
            <div className="container">
                <div
                className="row align-items-center justify-content-center"
                style={{height: "100vh"}}
                >
                    <div className="col-auto">
                        <InputNumber/>
                    </div>

                </div>
            </div>
        )
    }
}
