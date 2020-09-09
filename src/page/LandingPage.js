import React, { Component } from 'react'

import Header from 'parts/Header'
import landingPage from 'json/landingPage.json'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Category from 'parts/Category'
import Testimoni from 'parts/Testimoni'

import Footer from 'parts/Footer'

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount(){
        window.title = "Staycation | Home";
        window.scrollTo(0,0);
    }
    render() {
    
        return (
            <>
            <Header {...this.props}></Header>
            <Hero  refMostPick={this.refMostPicked} data={landingPage.hero}/>
            <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
            <Category data={landingPage.categories}/>
            <Testimoni data={landingPage.testimonial} />
            <Footer/>
            </>
        )
    }
}
