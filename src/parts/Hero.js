import React from 'react'

import ImageHero from 'assets/image/Picture.jpg'
import ImageHero_ from 'assets/image/frame.jpg'
import Button from 'elements /Button'
import formatNumber from 'utils/formatNumber'

import Fade from 'react-reveal/Fade'


export default function Hero(props) {
    function showMostPick(){
        window.scrollTo({
            top: props.refMostPick.current.offsetTop - 30,
            behavior: "smooth"
        });
    }
    
    return (
       <section className="container pt-4">
           <Fade left>
           <div className="row align-items-center">
            <div className="col-auto pt-5" style={{width: 530}}>
                <h1 className="h2 font-weight-bold line-height-1 mb-3">
                    Forget Busy Work,<br/>
                    Start Next Vacation
                </h1>
                <p className="mb-4 font-weight-light text-gray-500 w-75">
                We provide what you need to enjoy your
                holliday with family. Time to make another
                memorable moments.
                </p>

                <Button className="btn px-5" hasShadow isPrimary onclick={showMostPick}>
                    Show me Now
                </Button>
                <div className="row" style={{marginTop: 80}}>
                    <div className="col-auto" style={{marginRight: 25}}>
                        <img src="/images/ic_cities.svg" 
                        alt={`${props.data}Travelers`} width="32" height="32"/>
                        <h6 className="mt-3">
                            {formatNumber(props.data.travelers)}{" "} <span className="text-gray-500 font-weight-light">Travelers</span> 
                        </h6>
                    </div>
                    <div className="col-auto" style={{marginRight:35}}>
                        <img src="/images/ic_travelers.svg"
                        alt={`${props.data}Treasure`} width="32" height="32"/>
                        <h6 className="mt-3">
                            {formatNumber(props.data.treasures)}{" "} <span className="text-gray-500 font-weight-light">Treasure</span> 
                        </h6>
                    </div>
                    <div className="col-auto">
                        <img src="/images/ic_treasure.svg" 
                        alt={`${props.data}Cities`} width="32" height="32"/>
                        <h6 className="mt-3">
                            {formatNumber(props.data.cities)}{" "} <span className="text-gray-500 font-weight-light">Cities</span> 
                        </h6>
                    </div>
                </div>

            </div>
            <div className="col-6 pl-5" style={{marginRight: 40}}>
                <div style={{width: 520, height:410}}>
                    <img src={ImageHero} alt="Room with couches"
                    className="img-fluid position-absolute"
                    style={{margin: '-30px 0 0 -30px',
                zIndex:1}}/>
                <img src={ImageHero_} alt="Room with couches frame"
                className="img-fluid position-absolute" 
                style={{margin: '10px -15px -15px 0'}}/>
                </div>
            </div>
           </div>
           </Fade>
       </section>

    )
}
