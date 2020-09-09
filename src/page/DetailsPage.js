import React, { Component } from 'react'

import Header from 'parts/Header'
import PageDetailsTitle from 'parts/PageDetailsTitle'
import FeaturedImage from 'parts/FeaturedImage'
import PageDetailsDescription from 'parts/PageDetailsDescription'
import Testimonial from 'parts/Testimoni'
import Category from 'parts/Category'
import Footer from 'parts/Footer'

import BookingForm from 'parts/BookingForm'

import ItemDetails from 'json/itemDetails.json'

export default class DetailsPage extends Component {
    componentDidMount(){
        window.title = "Details Page";
        window.scrollTo(0,0);
    }

    render() {

        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""}
        ];
        return (
           <>
           <Header {...this.props}></Header>
           <PageDetailsTitle
               breadcrumb={breadcrumb}
               data={ItemDetails}>
           </PageDetailsTitle>
           <FeaturedImage
           data={ItemDetails.imageUrls}>
           </FeaturedImage>
           <section className="container">
               <div className="row">
                   <div className="col-7 pr-5">
                       <PageDetailsDescription data={ItemDetails}>

                       </PageDetailsDescription>
                   </div>
                   <div className="col-5"><BookingForm itemDetails={ItemDetails}></BookingForm></div>
               </div>
               
           </section>

           <Category data={ItemDetails.categories} />
           <Testimonial data={ItemDetails.testimonial}/>
           <Footer/>
           </>
        )
    }
}
